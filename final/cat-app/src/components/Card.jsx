import '../styles/Card.css';

function Card({ title, image, alt, description, onAddToCart, showAddToCartButton = true }) {
  return (
    <div className="card">
      <img src={image} alt={alt} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      {showAddToCartButton && (
        <button onClick={onAddToCart} className="add-to-cart-button">Add to Cart</button>
      )}
    </div>
  );
}

export default Card;
