import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Naimportujeme ThemeProvider, aby každá komponenta ve stromu měla přístup ke contextu
import { ThemeProvider } from './context/ThemeContext';

// Importujeme hlavní SCSS (app.scss importuje i bottombar.scss, card.scss, sidebar.scss…)
import './styles/app.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
