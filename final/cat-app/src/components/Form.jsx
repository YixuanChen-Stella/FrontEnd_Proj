import React, { useState } from 'react';
import '../styles/Form.css';

function Form({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (error) {
      setError(''); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      setError('Please enter a valid input');
      return;
    }
    onSubmit(inputValue);
    setInputValue(''); 
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="input">Order:</label>
      <input type="text" id="input" value={inputValue} onChange={handleChange} required />
      {error && <p className="error">{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
