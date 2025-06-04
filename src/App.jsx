// App.jsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import CardGrid from './components/CardGrid';
import CardForm from './components/CardForm';
import Modal from './components/Modal';
import BottomBar from './components/BottomBar';
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

export default App;
