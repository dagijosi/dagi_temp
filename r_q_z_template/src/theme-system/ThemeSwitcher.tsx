import React from 'react';
import { useTheme } from './ThemeContext';
import { FaPalette } from 'react-icons/fa';

const ThemeSwitcher: React.FC = () => {
  const { currentTheme, setTheme, availableThemes } = useTheme();

  return (
    <div className="relative inline-block text-left">
      <div className="flex items-center space-x-2">
        <FaPalette className="text-theme-icon w-5 h-5" />
        <select
          value={currentTheme.id}
          onChange={(e) => setTheme(e.target.value)}
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white/50 backdrop-blur-sm shadow-sm"
          style={{
             color: 'var(--color-text)',
             borderColor: 'var(--color-border)',
          }}
        >
          {availableThemes.map((theme) => (
            <option key={theme.id} value={theme.id} className="text-black">
              {theme.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
