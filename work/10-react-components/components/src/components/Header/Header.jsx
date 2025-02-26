import Button from '../Button/Button';
import './Header.css';

function Header({ setCurrentPage }) {
  return (
    <header className="header">
      <div className="logo">
        <h1>Love Cat</h1>
      </div>
      
      <nav className="nav">
        <Button 
          visual="link" 
          onClick={() => setCurrentPage('text')}
        >
          Home
        </Button>

        <Button 
          visual="link" 
          onClick={() => setCurrentPage('cards')}
        >
          Cat Info
        </Button>

        <Button 
          visual="link" 
          onClick={() => setCurrentPage('panels')}
        >
          Meet Cat
        </Button>
      </nav>
    </header>
  );
}

export default Header; 