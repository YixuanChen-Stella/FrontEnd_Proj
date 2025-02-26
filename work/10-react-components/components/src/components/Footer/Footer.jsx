import './Footer.css';

function Footer() {
  const handlePrivacyClick = () => {
    console.log("Privacy Policy clicked");
  };

  const handleCareerClick = () => {
    console.log("Career clicked");
  };

  const handleContactClick = () => {
    console.log("Contact Us clicked");
  };

  return (
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; About Cats</p>
          <nav className="footer-nav">
            <ul>
              <li><button onClick={handlePrivacyClick} className="footer-button">Privacy Policy</button></li>
              <li><button onClick={handleCareerClick} className="footer-button">Career</button></li>
              <li><button onClick={handleContactClick} className="footer-button">Contact Us</button></li>
            </ul>
          </nav>
        </div>
      </footer>
  );
}

export default Footer;
