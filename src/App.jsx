<<<<<<< HEAD
// App.jsx
import React, { useState } from 'react';
=======
// src/App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
>>>>>>> 885fd422dba9f73348d59ff6522f69cfdc59103a
import Sidebar from './components/Sidebar';
import CardGrid from './components/CardGrid';
import CardForm from './components/CardForm';
import Modal from './components/Modal';
import BottomBar from './components/BottomBar';
<<<<<<< HEAD
import './styles/app.scss';

function App() {
  const [cardsData, setCardsData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCard = newCard => {
    setCardsData(prev => [newCard, ...prev]);
    setIsModalOpen(false);
  };

  return (
    <div className="app-container">
      <Sidebar />

      <main className="main-content">
        <h2 className="page-title">Content Reward Setup</h2>
        <button
          className="app__create-btn"
          onClick={() => setIsModalOpen(true)}
        >
          Create
        </button>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <CardForm
            onAddCard={handleAddCard}
            onClose={() => setIsModalOpen(false)}
          />
        </Modal>

        {cardsData.length > 0 && <CardGrid cardsData={cardsData} />}
      </main>

      <BottomBar />
    </div>
  );
}
=======
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';  // ← nově importujeme Profile

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Veřejné cesty */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Chráněné: Home */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <div className="app-container">
                <Sidebar />
                <main className="main-content">
                  <Home />
                </main>
                <BottomBar />
              </div>
            </ProtectedRoute>
          }
        />

        {/* Chráněná: Profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <div className="app-container">
                <Sidebar />
                <main className="main-content">
                  <Profile />
                </main>
              </div>
            </ProtectedRoute>
          }
        />

        {/* Přesměrování neznámých cest */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
>>>>>>> 885fd422dba9f73348d59ff6522f69cfdc59103a

export default App;
