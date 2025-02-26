import React, { useState } from 'react';
import Card from '../components/Card';
import DropdownMenu from '../components/DropDownMenu';
import ShoppingCart from '../components/ShoppingCart';
import espressoImage from '../images/Espresso.jpg';
import latteImage from '../images/Latte.jpg';
import orangeJuiceImage from '../images/OrangeJuice.jpg';
import appleJuiceImage from '../images/AppleJuice.jpg';
import cheesecakeImage from '../images/Cheesecake.jpg';
import brownieImage from '../images/Brownie.jpg';
import '../styles/OrderPage.css';

function OrderPage() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { title: 'Espresso $2.5', image: espressoImage, description: 'Rich and bold espresso.', price: 2.5, alt: 'Cup of rich espresso coffee' },
    { title: 'Latte $3.0', image: latteImage, description: 'Smooth and creamy latte.', price: 3.0, alt: 'Creamy latte in a glass cup' },
    { title: 'Orange Juice $2.0', image: orangeJuiceImage, description: 'Freshly squeezed orange juice.', price: 2.0, alt: 'Glass of fresh orange juice' },
    { title: 'Apple Juice $2.0', image: appleJuiceImage, description: 'Crisp and refreshing apple juice.', price: 2.0, alt: 'Refreshing apple juice in a glass' },
    { title: 'Cheesecake $4.0', image: cheesecakeImage, description: 'Creamy and delicious cheesecake.', price: 4.0, alt: 'Slice of creamy cheesecake dessert' },
    { title: 'Brownie $3.5', image: brownieImage, description: 'Rich and fudgy brownie.', price: 3.5, alt: 'Fudgy chocolate brownie square' },
  ];

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (index) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };

  return (
    <main className="order-page">
      <div className="order-header">
        <h1 className="order-title">Order Now!</h1>
        <DropdownMenu />
      </div>
      <div className="card-container">
        {products.map((product, index) => (
          <Card
            key={index}
            title={product.title}
            image={product.image}
            description={product.description}
            alt={product.alt} // Add alt attribute here
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
      <ShoppingCart cartItems={cartItems} onRemoveItem={removeFromCart} />
    </main>
  );
}

export default OrderPage;