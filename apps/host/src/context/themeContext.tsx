import React, { useEffect, useState } from "react";
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
  const defaultTheme =
    window.localStorage.getItem(THEME_LOCAL_STORAGE_KEY) || initialValue.theme;
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    window.localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Theme dataTheme={theme}>{children}</Theme>
    </ThemeContext.Provider>
  );
};
