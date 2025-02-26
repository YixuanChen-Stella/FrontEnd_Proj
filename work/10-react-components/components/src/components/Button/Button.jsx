import { useState } from 'react';
import './Button.css';

function Button({ 
  children, 
  onClick, 
  type = "button",
  visual = "button",
  className = "" 
}) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 3000);
    onClick && onClick(e);
  };

  return (
    <div className="button-wrapper">
      <button
        type={type}
        onClick={handleClick}
        className={`btn ${visual === 'link' ? 'btn-link' : 'btn-regular'} ${className}`}
      >
        {children}
      </button>
      {isClicked && <span className="click-feedback">Button was clicked!</span>}
    </div>
  );
}

export default Button; 