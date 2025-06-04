import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Importujeme SCSS (nikoli index.css)
import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);