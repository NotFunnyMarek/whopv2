// src/context/ThemeContext.jsx

import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

/**
 * Obaluje celou aplikaci a umožňuje přepínat světelné/tmavé téma.
 * Ukládá volbu do localStorage a při změně nastaví třídu na <body>.
 */
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = window.localStorage.getItem('app-theme');
    return saved || 'light';
  });

  useEffect(() => {
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(`theme-${theme}`);
    window.localStorage.setItem('app-theme', theme);
  }, [theme]);

  const setLight = () => setTheme('light');
  const setDark  = () => setTheme('dark');

  return (
    <ThemeContext.Provider value={{ theme, setLight, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
