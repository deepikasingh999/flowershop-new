import './Cart.css';
import { useEffect, useState } from 'react';

function Cart() {
  const [storedCart, setStoredCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      setStoredCart(JSON.parse(savedCart));
    }
  }, []);

  // Remove item from cart
  const handleRemove = (indexToRemove) => {
    const updatedCart = storedCart.filter((_, index) => index !== indexToRemove);
    setStoredCart(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  // Clear entire cart
  const handleClearCart = () => {
    setStoredCart([]);
    localStorage.removeItem('cartItems');
  };

  // Calculate total price
  const totalPrice = storedCart.reduce((sum, item) => {
    const numericPrice = parseFloat(item.price.toString().replace(/[^0-9.]/g, ''));
    return sum + (isNaN(numericPrice) ? 0 : numericPrice);
  }, 0);

  return (
    <div className="cart">
      <h2>My Cart</h2>
      {storedCart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul>
            {storedCart.map((item, index) => (
              <li key={index}>
                <div className="imgbox">
                  <div className="imgcart">
                    <img src={item.image} alt={item.name} width="50" />
                  </div>
                </div>
                <div className="itemname">{item.name}</div>
                <div className="itemprice">{item.price}</div>
                <button onClick={() => handleRemove(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <button className='clear' onClick={handleClearCart}>Clear Cart</button>
        </>
      )}
      <div className="total">Total Price: ₹{totalPrice.toFixed(2)}</div>
    </div>
  );
}

export default Cart;