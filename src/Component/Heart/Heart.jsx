import './Heart.css';
import { useEffect, useState } from 'react';

function Heart() {
  const [storedHeart, setStoredHeart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedHeart = localStorage.getItem('heartItems');
    if (savedHeart) {
      setStoredHeart(JSON.parse(savedHeart));
    }
  }, []);

  // Remove item from cart
  const handleRemove = (indexToRemove) => {
    const updatedHeart = storedHeart.filter((_, index) => index !== indexToRemove);
    setStoredHeart(updatedHeart);
    localStorage.setItem('heartItems', JSON.stringify(updatedHeart));
  };

  // Clear entire cart
  const handleClearHeart = () => {
    setStoredHeart([]);
    localStorage.removeItem('heartItems');
  };


  

  return (
    <div className="cart">
      <h2>My Wishlist</h2>
      {storedHeart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul>
            {storedHeart.map((item, index) => (
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
          <button className='clear' onClick={handleClearHeart}>Clear Wishlist</button>
        </>
      )}
      
    </div>
  );
}

export default Heart;

