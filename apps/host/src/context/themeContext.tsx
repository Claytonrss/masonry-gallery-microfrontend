import React, { useEffect, useMemo, useState } from "react";
import { Theme } from "react-daisyui";

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

const initialValue: ThemeContextType = {
  theme: "dark",
  toggleTheme: () => {
    return;
  },
};

export const ThemeContext = React.createContext<ThemeContextType>(initialValue);

const THEME_LOCAL_STORAGE_KEY = "@photoGallery-1.0.0-theme";

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const themeLocalStorage = window.localStorage.getItem(
    THEME_LOCAL_STORAGE_KEY
  );
  const defaultTheme = themeLocalStorage ?? initialValue.theme;
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    window.localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useMemo(() => {
    return () => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
    };
  }, [theme, setTheme]);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <Theme dataTheme={theme}>{children}</Theme>
    </ThemeContext.Provider>
  );
};
