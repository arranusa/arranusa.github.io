import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Helper to determine theme based on system time (hour)
  // Pagi - Sore (06:00 to 18:00) -> 'light'
  // Malam - Pagi (18:00 to 06:00) -> 'dark'
  const getThemeByTime = (): Theme => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 18) {
      return 'light';
    }
    return 'dark';
  };

  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
    return getThemeByTime();
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('theme-light');
      root.classList.remove('theme-dark');
    } else {
      root.classList.add('theme-dark');
      root.classList.remove('theme-light');
    }
  }, [theme]);

  // Dynamically update the theme in real-time if the user has not set a manual override
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (!saved) {
      const interval = setInterval(() => {
        const expectedTheme = getThemeByTime();
        setThemeState((current) => {
          if (current !== expectedTheme) {
            return expectedTheme;
          }
          return current;
        });
      }, 30000); // Check every 30 seconds
      return () => clearInterval(interval);
    }
  }, []);

  const toggleTheme = () => {
    setThemeState((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('portfolio-theme', next);
      return next;
    });
  };

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem('portfolio-theme', t);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
