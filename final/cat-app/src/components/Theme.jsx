import '../styles/Theme.css';
import dayIcon from '../images/day.svg';
import nightIcon from '../images/night.svg';

function Theme({ toggleTheme, isDarkMode }) {
  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle ${isDarkMode ? 'btn-dark' : 'btn-light'}`}
      aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <img 
        src={isDarkMode ? dayIcon : nightIcon} 
        alt={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'} 
        className="theme-icon"
      />
    </button>
  );
}

export default Theme;
