import '../styles/Button.css';

function Button({ children, onClick, type = "button", className = "" }) {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log('Enter key pressed');
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      onKeyDown={handleKeyPress}
      className={`btn ${className}`}
    >
      {children}
    </button>
  );
}

export default Button; 