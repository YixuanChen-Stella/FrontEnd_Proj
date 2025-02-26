import '../styles/ShoppingCart.css';
import Payment from './Payment';

function ShoppingCart({ cartItems, onRemoveItem }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <span>{item.title}</span>
              <span>${item.price.toFixed(2)}</span>
              <button onClick={() => onRemoveItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <div className="total-price">
        <strong>Total: </strong>${totalPrice.toFixed(2)}
      </div>
      {cartItems.length > 0 && <Payment totalPrice={totalPrice} />}
    </div>
  );
}

export default ShoppingCart;
