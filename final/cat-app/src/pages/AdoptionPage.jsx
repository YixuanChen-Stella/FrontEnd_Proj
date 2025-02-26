import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import Modal from '../components/Modal';
import '../styles/AdoptionPage.css';

import whiskersImage from '../images/Whiskers.jpg';
import shadowImage from '../images/Shadow.jpg';
import mittensImage from '../images/Mittens.jpg';
import tigerImage from '../images/Tiger.jpg';

function AdoptionPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactMethod: '',
    subscribe: false,
  });
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const cats = [
    {
      title: 'Whiskers',
      image: whiskersImage,
      alt: 'A playful kitten named Whiskers',
      description: 'Whiskers is a lively and playful kitten who loves to chase after anything that moves. Whether it\'s a ball of yarn or a laser pointer, Whiskers is always ready for a game. This little furball is full of energy and curiosity, making every day an adventure. Whiskers is looking for a loving home where he can explore and play to his heart\'s content. He\'s great with kids and other pets, and he\'ll bring endless joy and laughter to your household.'
    },
    {
      title: 'Shadow',
      image: shadowImage,
      alt: 'A shy cat named Shadow',
      description: 'Shadow is a gentle and reserved cat who prefers the quiet corners of the house. She enjoys lounging in the sun and watching the world go by from a cozy window perch. Shadow is a bit shy at first, but once she warms up to you, she\'s incredibly affectionate and loves gentle petting. She\'s looking for a calm and peaceful home where she can feel safe and loved. Shadow is perfect for someone who appreciates a quiet companion and a serene presence.'
    },
    {
      title: 'Mittens',
      image: mittensImage,
      alt: 'A friendly cat named Mittens',
      description: 'Mittens is a warm-hearted and friendly cat who loves nothing more than to cuddle up with her humans. She\'s the perfect lap cat, always ready to snuggle and purr contentedly. Mittens is very social and enjoys being around people, making her a great companion for families or individuals who want a loving pet. She\'s also quite playful and enjoys interactive toys. Mittens is looking for a home where she can be showered with love and attention.'
    },
    {
      title: 'Tiger',
      image: tigerImage,
      alt: 'An adventurous cat named Tiger',
      description: 'Tiger is an adventurous and spirited cat who loves to explore every nook and cranny. He\'s always on the lookout for new adventures and enjoys climbing and jumping. Tiger is full of life and curiosity, making him a fun and engaging companion. He\'s great with other pets and loves to play with toys that challenge his agility and intelligence. Tiger is seeking a home where he can continue his explorations and share his zest for life with his new family.'
    },
  ];

  const validate = (name, value) => {
    let error = '';
    if (name === 'firstName' || name === 'lastName') {
      if (!value) {
        error = `${name === 'firstName' ? 'First' : 'Last'} Name is required.`;
      }
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        error = 'Email is required.';
      } else if (!emailRegex.test(value)) {
        error = 'Invalid email address.';
      }
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
    setErrors({
      ...errors,
      [name]: validate(name, newValue),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validate(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    if (Object.keys(newErrors).length === 0) {
      setSubmittedData(formData);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        contactMethod: '',
        subscribe: false,
      });
      setIsModalOpen(false);
    } else {
      setErrors(newErrors);
    }
  };

  const handleAdoptClick = () => {
    setIsModalOpen(true);
    setSubmittedData(null);
  };

  const handleExit = () => {
    setIsModalOpen(false);
    setErrors({});
  };

  return (
    <main className="adoption-page">
      <div className="header-container">
        <h1>Adopt a Cat</h1>
        <Button className="btn-light" onClick={handleAdoptClick}>Adopt Now!</Button>
      </div>
      <div className="card-container">
        {cats.map((cat, index) => (
          <Card
            key={index}
            title={cat.title}
            image={cat.image}
            alt={cat.alt}
            description={cat.description}
            showAddToCartButton={false}
          />
        ))}
      </div>
      {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Information</h2>
          <p><strong>First Name:</strong> {submittedData.firstName}</p>
          <p><strong>Last Name:</strong> {submittedData.lastName}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Contact Method:</strong> {submittedData.contactMethod}</p>
          <p><strong>Subscribed:</strong> {submittedData.subscribe ? 'Yes' : 'No'}</p>
        </div>
      )}
      <Modal isOpen={isModalOpen} onClose={handleExit}>
        <h2>Adopt a Cat</h2>
        <form onSubmit={handleSubmit} className="adoption-form">
          <label htmlFor="firstName">First Name (*required):</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}

          <label htmlFor="lastName">Last Name (*required):</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}

          <label htmlFor="email">Email (*required):</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label htmlFor="contactMethod">Preferred Contact Method:</label>
          <select
            id="contactMethod"
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="telephone">Telephone</option>
            <option value="email">Email</option>
            <option value="other">Other</option>
          </select>

          <label>
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
            />
            Subscribe to newsletter
          </label>

          <div className="button-group">
            <Button type="submit" className="modal-button">Submit</Button>
            <Button type="button" className="modal-button" onClick={handleExit}>Exit</Button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

export default AdoptionPage;