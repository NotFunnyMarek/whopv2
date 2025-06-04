// src/App.jsx

import React from 'react';
import Sidebar from './components/Sidebar';
import CardGrid from './components/CardGrid';
import CardForm from './components/CardForm';
import Modal from './components/Modal';
import BottomBar from './components/BottomBar';
import { ThemeProvider } from './context/ThemeContext';
import './index.scss'; // Importujeme globální SCSS

const App = () => (
  <ThemeProvider>
    <div className="app-container">
      <Sidebar />

      <main className="main-content">
        <h1>WHOPV2 - HOME</h1>
      </main>

      <BottomBar />
    </div>
  </ThemeProvider>
);

export default App;
