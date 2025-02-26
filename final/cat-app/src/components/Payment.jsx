import React, { useState } from 'react';
import '../styles/Payment.css';

function Payment({ totalPrice }) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [cardNumberError, setCardNumberError] = useState('');
  const [expiryDateError, setExpiryDateError] = useState('');
  const [cvvError, setCvvError] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      setSuccessMessage('Payment processed successfully!');
      clearErrors();
      setCardNumber('');
      setExpiryDate('');
      setCvv('');
    }
  };

  const validateInputs = () => {
    let isValid = true;

    if (!/^\d{12}$/.test(cardNumber)) {
      setCardNumberError('Card number must be 12 digits.');
      isValid = false;
    } else {
      setCardNumberError('');
    }

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
      setExpiryDateError('Expiry date must be in MM/YY format.');
      isValid = false;
    } else {
      setExpiryDateError('');
    }

    if (!/^\d{3}$/.test(cvv)) {
      setCvvError('CVV must be 3 digits.');
      isValid = false;
    } else {
      setCvvError('');
    }

    return isValid;
  };

  const clearErrors = () => {
    setCardNumberError('');
    setExpiryDateError('');
    setCvvError('');
  };

  return (
    <div className="payment">
      <h3>Payment Details</h3>
      <form onSubmit={handlePayment}>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
            pattern="\d{12}"
            title="Card number must be 12 digits."
          />
          {cardNumberError && <p className="error-message">{cardNumberError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date (MM/YY)</label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
            pattern="(0[1-9]|1[0-2])\/\d{2}"
            title="Expiry date must be in MM/YY format."
          />
          {expiryDateError && <p className="error-message">{expiryDateError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
            pattern="\d{3}"
            title="CVV must be 3 digits."
          />
          {cvvError && <p className="error-message">{cvvError}</p>}
        </div>
        <button type="submit">Pay ${totalPrice.toFixed(2)}</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
}

export default Payment;