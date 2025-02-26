import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import AdoptionPage from './pages/AdoptionPage';
import Theme from './components/Theme';
import './index.css';

function App() {
    const [page, setPage] = useState('home');
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const renderPage = () => {
        switch (page) {
            case 'order':
                return <OrderPage />;
            case 'adoption':
                return <AdoptionPage />;
            default:
                return <HomePage />;
        }
    };

    return (
        <div className="app">
            <Header />
            <Navigation setPage={setPage} />
            <Theme toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            {renderPage()}
            <Footer />
        </div>
    );
}

export default App;