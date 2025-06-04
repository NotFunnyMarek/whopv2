// src/context/ThemeContext.jsx

import React, { createContext, useState, useEffect, useContext } from 'react';

// Vytvoříme kontext
const ThemeContext = createContext(null);

/**
 * ThemeProvider udržuje stav 'light' nebo 'dark', 
 * ukládá jej do localStorage a scriptem nastavuje na <body> třídu theme-light nebo theme-dark.
 */
export const ThemeProvider = ({ children }) => {
  // Načteme z localStorage nebo použijeme 'light' jako výchozí
  const [theme, setTheme] = useState(() => {
    const saved = window.localStorage.getItem('app-theme');
    return saved || 'light';
  });

  useEffect(() => {
    // Při každé změně theme upravíme třídy na <body>
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(`theme-${theme}`);
    window.localStorage.setItem('app-theme', theme);
  }, [theme]);

  const setLight = () => setTheme('light');
  const setDark = () => setTheme('dark');

  return (
    <ThemeContext.Provider value={{ theme, setLight, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook pro pohodlné získání contextu
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (ctx === null) {
    // Lepší diagnostika: pokud není ThemeProvider ve stromu, throw error
    throw new Error('useTheme() must be used within a ThemeProvider');
  }
  return ctx;
};
