// src/index.js

import React from 'react';
import { createRoot } from 'react-dom/client';  // novinka v React 18
import App from './App';

// Importujeme SCSS (nikoli index.css)
import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
