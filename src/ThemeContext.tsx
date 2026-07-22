import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

interface SavedThemeData {
  value: Theme;
  expiry: number;
}

const STORAGE_KEY = 'portfolio-theme';
const ONE_DAY_MS = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

// Helper to retrieve valid, non-expired theme from sessionStorage
const getSavedTheme = (): Theme | null => {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data: SavedThemeData = JSON.parse(raw);
    if (data && (data.value === 'light' || data.value === 'dark') && typeof data.expiry === 'number') {
      if (Date.now() < data.expiry) {
        return data.value;
      }
    }
    // Expired or corrupted -> clean up
    sessionStorage.removeItem(STORAGE_KEY);
    return null;
  } catch {
    sessionStorage.removeItem(STORAGE_KEY);
    return null;
  }
};

// Helper to persist theme into sessionStorage with 1 day expiration timestamp
const saveTheme = (t: Theme) => {
  try {
    const data: SavedThemeData = {
      value: t,
      expiry: Date.now() + ONE_DAY_MS,
    };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save theme to sessionStorage:', e);
  }
};

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
    const saved = getSavedTheme();
    if (saved) {
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

  // Dynamically update theme in real-time if there is no valid unexpired manual override
  useEffect(() => {
    const interval = setInterval(() => {
      const saved = getSavedTheme();
      if (!saved) {
        const expectedTheme = getThemeByTime();
        setThemeState((current) => {
          if (current !== expectedTheme) {
            return expectedTheme;
          }
          return current;
        });
      }
    }, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setThemeState((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      saveTheme(next);
      return next;
    });
  };

  const setTheme = (t: Theme) => {
    setThemeState(t);
    saveTheme(t);
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

