export interface Theme {
  id: string;
  name: string;
  type: 'solid' | 'gradient' | 'pattern';
  mode: 'light' | 'dark';
  colors: {
    background: string;
    text: string;
    icon: string;
    border: string;
    surface: string; // for cards/panels
  };
  patternImage?: string; // URL for pattern image
  backgroundSize?: string; // Optional background size property
}

export const themes: Theme[] = [
  {
    id: 'cyan-breeze',
    name: 'Cyan Breeze',
    type: 'solid',
    mode: 'light',
    colors: {
      background: '#f8fafc',
      text: '#0f172a',
      icon: '#06b6d4',
      border: '#e2e8f0',
      surface: '#ffffff',
    },
  },
  {
    id: 'deep-ocean',
    name: 'Deep Ocean',
    type: 'solid',
    mode: 'dark',
    colors: {
      background: '#0f172a',
      text: '#e2e8f0',
      icon: '#67e8f9',
      border: '#1e293b',
      surface: '#1e293b',
    },
  },
  {
    id: 'frosted-cyan',
    name: 'Frosted Cyan',
    type: 'solid',
    mode: 'light',
    colors: {
      background: '#f0f9ff',
      text: '#082f49',
      icon: '#22d3ee',
      border: 'rgba(14,165,233,0.3)',
      surface: 'rgba(255, 255, 255, 0.6)',
    },
  },
  {
    id: 'cyber-cyan',
    name: 'Cyber Cyan',
    type: 'solid',
    mode: 'dark',
    colors: {
      background: '#001f2d',
      text: '#e0f2fe',
      icon: '#00f7ff',
      border: '#00a3a3',
      surface: '#003d4d',
    },
  },
  {
    id: 'ocean-blue',
    name: 'Ocean Blue',
    type: 'gradient',
    mode: 'dark',
    colors: {
      background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 100%)',
      text: '#f8fafc',
      icon: '#60a5fa',
      border: '#1e3a8a',
      surface: 'rgba(30, 64, 175, 0.2)',
    },
  },
  {
    id: 'dark-matter',
    name: 'Dark Matter',
    type: 'solid',
    mode: 'dark',
    colors: {
      background: '#0a0a0a',
      text: '#e5e5e5',
      icon: '#a3a3a3',
      border: '#262626',
      surface: '#171717',
    },
  },
  {
    id: 'paper-pattern',
    name: 'Paper Pattern',
    type: 'pattern',
    mode: 'light',
    colors: {
      background: '#fef3c7',
      text: '#451a03',
      icon: '#d97706',
      border: '#f59e0b',
      surface: 'rgba(255, 255, 255, 0.6)',
    },
    patternImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")',
    backgroundSize: 'auto',
  },
  {
    id: 'grid-matrix',
    name: 'Grid Matrix',
    type: 'pattern',
    mode: 'dark',
    colors: {
        background: '#000000',
        text: '#00ff41',
        icon: '#008F11',
        border: '#005500',
        surface: 'rgba(0, 50, 0, 0.3)'
    },
    // Increased contrast: Bright Green lines #00bd30
    patternImage: `linear-gradient(#00bd30 1px, transparent 1px), linear-gradient(90deg, #00bd30 1px, transparent 1px)`,
    backgroundSize: '20px 20px'
  },
  {
    id: 'graph-paper', // Keeping this intact
    name: 'Graph Paper',
    type: 'pattern',
    mode: 'light',
    colors: {
        background: '#ffffff',
        text: '#475569',
        icon: '#3b82f6',
        border: '#cbd5e1',
        surface: 'rgba(255, 255, 255, 0.9)',
    },
    patternImage: `linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)`,
    backgroundSize: '20px 20px'
  },
  {
    id: 'polka-dots', // Keeping this intact
    name: 'Polka Dots',
    type: 'pattern',
    mode: 'light',
    colors: {
        background: '#f0f9ff',
        text: '#0369a1',
        icon: '#0ea5e9',
        border: '#bae6fd',
        surface: 'rgba(255, 255, 255, 0.8)',
    },
    patternImage: 'radial-gradient(#bae6fd 20%, transparent 20%)',
    backgroundSize: '20px 20px'
  },
  {
    id: 'carbon-fiber',
    name: 'Carbon Fiber',
    type: 'pattern',
    mode: 'dark',
    colors: {
      background: '#171717',
      text: '#e5e5e5',
      icon: '#737373',
      border: '#404040',
      surface: '#262626',
    },
    // High contrast woven pattern
    patternImage: 'repeating-linear-gradient(45deg, #171717 0, #171717 10px, #2e2e2e 10px, #2e2e2e 20px)',
    // backgroundSize removed to allow pattern to repeat naturally
  },
  {
    id: 'lavender-mist',
    name: 'Lavender Mist',
    type: 'pattern',
    mode: 'light',
    colors: {
      background: '#faf5ff',
      text: '#6b21a8',
      icon: '#a855f7',
      border: '#e9d5ff',
      surface: 'rgba(255, 255, 255, 0.8)',
    },
    patternImage: 'radial-gradient(#d8b4fe 20%, transparent 20%)',
    backgroundSize: '16px 16px',
  },
  
  {
    id: 'midnight-nebula',
    name: 'Midnight Nebula',
    type: 'gradient',
    mode: 'dark',
    colors: {
      background: 'linear-gradient(to bottom right, #020617, #2e1065, #172554)', // slate-950 -> violet-950 -> blue-950
      text: '#e2e8f0', // slate-200
      icon: '#a78bfa', // violet-400
      border: '#39235bff', // violet-900
      surface: 'rgba(15, 23, 42, 0.6)', // Darker, higher contrast surface
    },
  },
  {
    id: 'diagonal-stripes',
    name: 'Diagonal Stripes',
    type: 'pattern',
    mode: 'dark',
    colors: {
        background: '#111827', // gray-900
        text: '#f3f4f6',
        icon: '#9ca3af',
        border: '#374151',
        surface: '#1f2937',
    },
    // Increased contrast: Stripe color #374151 against dark background
    patternImage: 'repeating-linear-gradient(45deg, #374151 0, #374151 2px, transparent 2px, transparent 10px)',
  },
  {
    id: 'azure-day',
    name: 'Azure Day',
    type: 'solid',
    mode: 'light',
    colors: {
      background: '#eff6ff',
      text: '#1e3a8a',
      icon: '#3b82f6',
      border: '#dbe7f7ff',
      surface: '#ffffff',
    },
  },
  {
    id: 'abyss-blue',
    name: 'Abyss Blue',
    type: 'solid',
    mode: 'dark',
    colors: {
      background: '#020617', // slate-950
      text: '#e0f2fe', // sky-100
      icon: '#3b82f6', // blue-500
            border: '#1e293b', // blue-700
      surface: '#1e293b', // slate-800
    },
  },
  {
    id: 'sunset-mirage',
    name: 'Sunset Mirage',
    type: 'gradient',
    mode: 'dark',
    colors: {
      background: 'linear-gradient(to bottom right, #4c1d95, #c026d3, #f59e0b)', // violet-900 -> fuchsia-600 -> amber-500
      text: '#ffffff',
      icon: '#fbbf24', // amber-400
      border: 'rgba(255, 255, 255, 0.2)',
      surface: 'rgba(0, 0, 0, 0.2)',
    },
  },
  {
    id: 'emerald-forest',
    name: 'Emerald Forest',
    type: 'solid',
    mode: 'dark',
    colors: {
      background: '#022c22', // emerald-950
      text: '#ecfdf5', // emerald-50
      icon: '#34d399', // emerald-400
      border: '#065f46', // emerald-800
      surface: '#064e3b', // emerald-900
    },
  },
  {
    id: 'rose-gold',
    name: 'Rose Gold',
    type: 'solid',
    mode: 'light',
    colors: {
      background: '#fff1f2', // rose-50
      text: '#881337', // rose-900
      icon: '#e11d48', // rose-600
      border: '#fecdd3', // rose-200
      surface: '#ffffff',
    },
  },
  {
    id: 'hexagon-hive',
    name: 'Hexagon Hive',
    type: 'pattern',
    mode: 'dark',
    colors: {
      background: '#0f172a', // slate-900 base
      text: '#e2e8f0',
      icon: '#f59e0b', // amber-500
      border: '#334155',
      surface: 'rgba(15, 23, 42, 0.8)',
    },
    patternImage: `url("data:image/svg+xml,%3Csvg width='24' height='40' viewBox='0 0 24 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10s-10 4.477-10 10v20c0 5.523 4.477 10 10 10zM12 40c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10s-10 4.477-10 10v20c0 5.523 4.477 10 10 10z' fill='%231e293b' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
    backgroundSize: 'auto',
  },
  {
    id: 'executive-suite',
    name: 'Executive Suite',
    type: 'gradient',
    mode: 'dark',
    colors: {
      background: 'linear-gradient(180deg, #18181b, #27272a)', // zinc-950 -> zinc-800
      text: '#e4e4e7', // zinc-200
      icon: '#a1a1aa', // zinc-400
      border: '#3f3f46', // zinc-700
      surface: '#27272a', // zinc-800
    },
  },
  {
    id: 'deep-jungle',
    name: 'Deep Jungle',
    type: 'gradient',
    mode: 'dark',
    colors: {
      background: 'linear-gradient(to bottom right, #022c22, #0f766e)', // emerald-950 -> teal-700
      text: '#f0fdf4', // emerald-50
      icon: '#34d399', // emerald-400
      border: '#065f46', // emerald-800
      surface: 'rgba(2, 44, 34, 0.8)',
    },
  },
  {
    id: 'royal-dusk',
    name: 'Royal Dusk',
    type: 'gradient',
    mode: 'dark',
    colors: {
      background: 'linear-gradient(to right, #1e1b4b, #312e81)', // indigo-950 -> indigo-900
      text: '#e0e7ff', // indigo-100
      icon: '#818cf8', // indigo-400
      border: '#3730a3', // indigo-800
      surface: '#312e81',
    },
  },
  {
    id: 'blueprint-tech',
    name: 'Blueprint Tech',
    type: 'pattern',
    mode: 'dark',
    colors: {
      background: '#1e293b', // slate-800
      text: '#cbd5e1', // slate-300
      icon: '#38bdf8', // sky-400
      border: '#334155', // slate-700
      surface: '#0f172a', // slate-900 (darker panels)
    },
    patternImage: `linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)`,
    backgroundSize: '20px 20px',
  },
  {
  id: 'gradient-radial',
  name: 'Gradient Radial',
  type: 'gradient',
  mode: 'light',
  colors: {
    background: 'radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #6366f1 100%)',
    text: '#0f172a',          // dark navy for contrast
    icon: '#6366f1',          // indigo-500 accent
    border: '#e2e8f0',        // slate-200
    surface: 'rgba(255, 255, 255, 0.8)', // soft light panels
  },
},
{
  id: 'violet-glow',
  name: 'Violet Glow',
  type: 'gradient',
  mode: 'light',
  colors: {
    background: 'radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #7c3aed 100%)',
    text: '#0f172a',           // dark slate text
    icon: '#7c3aed',           // violet-600 accent
    border: '#e2e8f0',         // light gray border
    surface: 'rgba(255, 255, 255, 0.85)', // light glass panel
  },
},
{
  id: 'slate-glow',
  name: 'Slate Glow',
  type: 'gradient',
  mode: 'light',
  colors: {
    background: 'radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #475569 100%)',
    text: '#0f172a',           // dark text for contrast
    icon: '#475569',           // slate-600 accent
    border: '#cbd5e1',         // slate-300 border
    surface: 'rgba(255, 255, 255, 0.85)',
  },
},
{
  id: 'teal-glow',
  name: 'Teal Glow',
  type: 'gradient',
  mode: 'light',
  colors: {
    background: 'radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #14b8a6 100%)',
    text: '#0f172a',
    icon: '#14b8a6',           // teal-500 accent
    border: '#99f6e4',         // teal-200 border
    surface: 'rgba(255, 255, 255, 0.85)',
  },
},
{
  id: 'pink-glow',
  name: 'Pink Glow',
  type: 'gradient',
  mode: 'light',
  colors: {
    background: 'radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #ec4899 100%)',
    text: '#0f172a',
    icon: '#ec4899',           // pink-500 accent
    border: '#fbcfe8',         // pink-200 border
    surface: 'rgba(255, 255, 255, 0.85)',
  },
},
{
  id: 'emerald-glow',
  name: 'Emerald Glow',
  type: 'gradient',
  mode: 'light',
  colors: {
    background: 'radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #10b981 100%)',
    text: '#064e3b',           // emerald-900 for contrast
    icon: '#10b981',           // emerald-500 accent
    border: '#a7f3d0',         // emerald-200 border
    surface: 'rgba(255, 255, 255, 0.85)',
  },
},
{
  id: 'dark-horizon-glow',
  name: 'Dark Horizon Glow',
  type: 'gradient',
  mode: 'dark',
  colors: {
    background: 'radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)',
    text: '#e2e8f0',          // slate-200 for visibility on dark backgrounds
    icon: '#60a5fa',          // blue-400 accent for highlights
    border: '#1e293b',        // slate-800 border
    surface: 'rgba(15, 23, 42, 0.7)', // translucent navy surface for nav/cards
  },
},
{
  id: 'azure-depths',
  name: 'Azure Depths',
  type: 'gradient',
  mode: 'dark',
  colors: {
    background: 'radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)',
    text: '#ffffff',            // white text for contrast on dark background
    icon: '#60a5fa',            // blue accent for icons/highlights
    border: '#1e293b',          // dark border similar to slate-800
    surface: 'rgba(1, 1, 51, 0.7)', // translucent deep-blue surface for cards/panels
  },
},
{
  id: 'paper-texture',
  name: 'Paper Texture',
  type: 'pattern',
  mode: 'light',
  colors: {
    background: '#faf9f6',  // light base color
    text: '#111827',         // dark text for contrast
    icon: '#6b7280',         // gray icons
    border: '#d1d5db',       // light gray border
    surface: 'rgba(250, 249, 246, 0.9)', // translucent surface for cards/panels
  },
  patternImage: `
    radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0),
    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px),
    repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px)
  `,
  backgroundSize: '8px 8px, 32px 32px, 32px 32px',
},
{
  id: 'diagonal-stripes-background',
  name: 'Diagonal Stripes Background',
  type: 'pattern',
  mode: 'light',
  colors: {
    background: '#ffffff',          // base white background
    text: '#111827',                // dark text
    icon: '#6b7280',                // gray icons
    border: '#d1d5db',              // light gray border
    surface: 'rgba(255, 255, 255, 0.9)', // translucent surface for cards/panels
  },
  patternImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, #f3f4f6 2px, #f3f4f6 4px)',
  backgroundSize: undefined,
},
{
  id: 'diagonal-grid-light',
  name: 'Diagonal Grid with Light',
  type: 'pattern',
  mode: 'light',
  colors: {
    background: '#fafafa',          // light gray background
    text: '#111827',                // dark text
    icon: '#6b7280',                // gray icons
    border: '#d1d5db',              // light gray border
    surface: 'rgba(250, 250, 250, 0.9)', // translucent surface for cards/panels
  },
  patternImage: `
    repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px),
    repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px)
  `,
  backgroundSize: '40px 40px',
},
{
  id: 'crosshatch-art-light',
  name: 'Crosshatch Art - Light Pattern',
  type: 'pattern',
  mode: 'light',
  colors: {
    background: '#ffffff',          // base white background
    text: '#1f2937',                // gray-800 text
    icon: '#6b7280',                // gray icons
    border: '#d1d5db',              // light gray border
    surface: 'rgba(255, 255, 255, 0.9)', // translucent surface for cards/panels
  },
  patternImage: `
    repeating-linear-gradient(22.5deg, transparent, transparent 2px, rgba(75, 85, 99, 0.06) 2px, rgba(75, 85, 99, 0.06) 3px, transparent 3px, transparent 8px),
    repeating-linear-gradient(67.5deg, transparent, transparent 2px, rgba(107, 114, 128, 0.05) 2px, rgba(107, 114, 128, 0.05) 3px, transparent 3px, transparent 8px),
    repeating-linear-gradient(112.5deg, transparent, transparent 2px, rgba(55, 65, 81, 0.04) 2px, rgba(55, 65, 81, 0.04) 3px, transparent 3px, transparent 8px),
    repeating-linear-gradient(157.5deg, transparent, transparent 2px, rgba(31, 41, 55, 0.03) 2px, rgba(31, 41, 55, 0.03) 3px, transparent 3px, transparent 8px)
  `,
  backgroundSize: undefined,
},
{
  id: 'magenta-orb-grid',
  name: 'Magenta Orb Grid Background',
  type: 'pattern',
  mode: 'dark',
  colors: {
    background: '#020617',
    text: '#e2e8f0',
    icon: '#ec4899',
    border: '#475569',
    surface: 'rgba(2, 6, 23, 0.8)',
  },
  patternImage: `
    linear-gradient(to right, rgba(71,85,105,0.4) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(71,85,105,0.4) 1px, transparent 1px),
    radial-gradient(circle at 50% 60%, rgba(236,72,153,0.3) 0%, rgba(168,85,247,0.2) 40%, transparent 70%)
  `,
  backgroundSize: '40px 40px, 40px 40px, 100% 100%',
},
{
  id: 'crosshatch-art-dark',
  name: 'Crosshatch Art - Dark Pattern',
  type: 'pattern',
  mode: 'dark',
  colors: {
    background: '#0f0f0f',
    text: '#ffffff',
    icon: '#10b981',
    border: '#374151',
    surface: 'rgba(15, 15, 15, 0.95)',
  },
  patternImage: `
    repeating-linear-gradient(22.5deg, transparent, transparent 2px, rgba(16, 185, 129, 0.55) 2px, rgba(16, 185, 129, 0.55) 3px, transparent 3px, transparent 8px),
    repeating-linear-gradient(67.5deg, transparent, transparent 2px, rgba(245, 101, 101, 0.45) 2px, rgba(245, 101, 101, 0.45) 3px, transparent 3px, transparent 8px),
    repeating-linear-gradient(112.5deg, transparent, transparent 2px, rgba(234, 179, 8, 0.4) 2px, rgba(234, 179, 8, 0.4) 3px, transparent 3px, transparent 8px),
    repeating-linear-gradient(157.5deg, transparent, transparent 2px, rgba(249, 115, 22, 0.35) 2px, rgba(249, 115, 22, 0.35) 3px, transparent 3px, transparent 8px)
  `,
  backgroundSize: undefined,
},
{
  id: 'striped-dark',
  name: 'Striped Dark',
  type: 'pattern',
  mode: 'dark',
  colors: {
    background: '#000000',
    text: '#ffffff',
    icon: '#f87171',
    border: '#111111',
    surface: 'rgba(0, 0, 0, 0.95)',
  },
  patternImage: 'repeating-linear-gradient(45deg, #000 0px, #2a2a2a 2px, #000 4px, #3a3a3a 6px)',
  backgroundSize: undefined,
},
{
  id: 'dark-circuit-board',
  name: 'Dark Circuit Board Background',
  type: 'pattern',
  mode: 'dark',
  colors: {
    background: '#171717',                 // dark gray base
    text: '#e2e8f0',                       // light text
    icon: '#10b981',                        // green accent
    border: '#262626',                       // slightly lighter dark
    surface: 'rgba(23, 23, 23, 0.9)',       // translucent surface
  },
  patternImage: `
    linear-gradient(90deg, #171717 1px, transparent 1px),
    linear-gradient(180deg, #171717 1px, transparent 1px),
    linear-gradient(90deg, #262626 1px, transparent 1px),
    linear-gradient(180deg, #262626 1px, transparent 1px)
  `,
  backgroundSize: '50px 50px, 50px 50px, 10px 10px, 10px 10px',
},
{
  id: 'circuit-board-dark',
  name: 'Circuit Board - Dark Pattern',
  type: 'pattern',
  mode: 'dark',
  colors: {
    background: '#0f0f0f',
    text: '#ffffff',
    icon: '#22c55e',
    border: '#111111',
    surface: 'rgba(15, 15, 15, 0.95)',
  },
  patternImage: `
    repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(34, 197, 94, 0.4) 19px, rgba(34, 197, 94, 0.4) 20px, transparent 20px, transparent 39px, rgba(34, 197, 94, 0.4) 39px, rgba(34, 197, 94, 0.4) 40px),
    repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(34, 197, 94, 0.4) 19px, rgba(34, 197, 94, 0.4) 20px, transparent 20px, transparent 39px, rgba(34, 197, 94, 0.4) 39px, rgba(34, 197, 94, 0.4) 40px),
    radial-gradient(circle at 20px 20px, rgba(16, 185, 129, 0.5) 2px, transparent 2px),
    radial-gradient(circle at 40px 40px, rgba(16, 185, 129, 0.5) 2px, transparent 2px)
  `,
  backgroundSize: '40px 40px, 40px 40px, 40px 40px, 40px 40px',
}


];

export const defaultTheme = themes[0];
export const defaultDarkTheme = themes[1];
