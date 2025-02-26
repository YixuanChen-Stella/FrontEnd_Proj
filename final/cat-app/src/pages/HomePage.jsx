import Accordions from '../components/Accordions';
import ImageCarousel from '../components/ImageCarousel';
import cat1 from '../images/cat1.jpg';
import cat2 from '../images/cat2.jpg';
import cat3 from '../images/cat3.jpg';
import '../styles/HomePage.css';

function HomePage() {
  const images = [
    { src: cat1, alt: 'A quite cat watching at someone' },
    { src: cat2, alt: 'A sleepy cat lying on the sofa' },
    { src: cat3, alt: 'A curious cat looking outside' }
  ];

  return (
    <main className="home-page">
      <div className="content-container">
        <div className="accordion-container">
          <Accordions />
        </div>
        <div className="carousel-container">
          <ImageCarousel images={images} />
        </div>
      </div>
    </main>
  );
}

export default HomePage;
