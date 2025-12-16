import React, { createContext, useContext, useEffect, useState } from 'react';
import { type Theme, themes, defaultTheme, defaultDarkTheme } from './themes';

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (themeId: string) => void;
  availableThemes: Theme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentThemeState] = useState<Theme>(() => {
    // 1. Check localStorage
    const savedThemeId = localStorage.getItem('app-theme-id');
    if (savedThemeId) {
      const savedTheme = themes.find(t => t.id === savedThemeId);
      if (savedTheme) return savedTheme;
    }

    // 2. Check System Preference
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return defaultDarkTheme;
    }

    // 3. Fallback to default (Light)
    return defaultTheme;
  });

  const setTheme = (themeId: string) => {
    const theme = themes.find((t) => t.id === themeId);
    if (theme) {
      setCurrentThemeState(theme);
      localStorage.setItem('app-theme-id', theme.id);
    }
  };

  useEffect(() => {
    // Update CSS variables whenever the theme changes
    const root = document.documentElement;

    // Set common colors
    root.style.setProperty('--color-text', currentTheme.colors.text);
    root.style.setProperty('--color-icon', currentTheme.colors.icon);
    root.style.setProperty('--color-border', currentTheme.colors.border);
    root.style.setProperty('--color-surface', currentTheme.colors.surface);

    // Handle Background Logic
    let bgSize = 'cover';
    if (currentTheme.backgroundSize) {
        bgSize = currentTheme.backgroundSize;
    } else if (currentTheme.type === 'pattern') {
        bgSize = 'auto'; // Default for patterns is to repeat at native size
    }

    root.style.setProperty('--background-size', bgSize);

    if (currentTheme.type === 'gradient') {
        // For gradients, the 'background' color property holds the gradient string
        root.style.setProperty('--color-background', 'transparent'); 
        root.style.setProperty('--background-image', currentTheme.colors.background);
        root.style.setProperty('--background-blend-mode', 'normal');
    } 
    else if (currentTheme.type === 'pattern') {
        // For patterns, we have a base color and an image
        root.style.setProperty('--color-background', currentTheme.colors.background);
        root.style.setProperty('--background-image', currentTheme.patternImage || 'none');
        root.style.setProperty('--background-blend-mode', 'multiply');
    } 
    else {
        // Solid colors
        root.style.setProperty('--color-background', currentTheme.colors.background);
        root.style.setProperty('--background-image', 'none');
        root.style.setProperty('--background-blend-mode', 'normal');
    }

  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, availableThemes: themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
