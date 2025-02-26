import React, { useState } from 'react';
import '../styles/ImageCarousel.css'; 

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <button onClick={prevImage} className="carousel-button">Previous</button>
            <img 
                src={images[currentIndex].src} 
                alt={images[currentIndex].alt} 
                className="carousel-image" 
            />
            <button onClick={nextImage} className="carousel-button">Next</button>
        </div>
    );
};

export default ImageCarousel;
