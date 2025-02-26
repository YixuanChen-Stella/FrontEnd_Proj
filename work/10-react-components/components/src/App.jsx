import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TextContent from './components/Pages/TextContent';
import Cards from './components/Pages/Cards';
import Panels from './components/Pages/Panels';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('text');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app">
      <Header setCurrentPage={setCurrentPage} />
      
      <main>
        <Button 
          visual="button" 
          onClick={() => setIsModalOpen(true)}
        >
          Adopt Now!
        </Button>

        {currentPage === 'text' && <TextContent />}
        {currentPage === 'cards' && <Cards setCurrentPage={setCurrentPage} />}
        {currentPage === 'panels' && <Panels />}

        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </main>

      <Footer />
    </div>
  );
}

export default App; 