



import React from 'react';
import './Product.css';

function Product() {
  const flowers = [
    {
      name: "Cherry Blossom",
      image: "https://imgcdn.floweraura.com/countryside-warmth-in-bloom-9756230fl-A_0.jpg?tr=w-304,dpr-1.5,q-70",
      price: "₹30"
    },
    {
      name: "Hydrangea",
      image: "https://imgcdn.floweraura.com/exquisite-pink-roses-bouquet-9798560fl-A.jpg?tr=w-304,dpr-1.5,q-70",
      price: "₹50"
    },
    {
      name: "Marigold",
      image: "https://imgcdn.floweraura.com/pastel-symphony-in-blooms-9737470fl-A.jpg?tr=w-304,dpr-1.5,q-70",
      price: "₹40"
    },
    {
      name: "Lavender",
      image: "https://imgcdn.floweraura.com/DSC_3937_0.jpg?tr=w-304,dpr-1.5,q-70",
      price: "₹60"
    },
    {
      name: "Daisy",
      image: "https://imgcdn.floweraura.com/orchids-and-roses-boquet-9857770fl-A_0.jpg?tr=w-304,dpr-1.5,q-70",
      price: "₹40"
    },
    {
      name: "Sunflower",
      image: "https://imgcdn.floweraura.com/blooms-wrapped-in-sunrise-hues-9745430fl-A_1.jpg?tr=w-304,dpr-1.5,q-70",
      price: "₹20"
    },
    {
      name: "Peony",
      image: "https://imgcdn.floweraura.com/DSC_1243_0.jpg?tr=w-304,dpr-1.5,q-70",
      price: "₹10"
    },
    {
      name: "Orchid",
      image: "https://imgcdn.floweraura.com/DSC_8206.jpg?tr=w-304,dpr-1.5,q-70",
      price: "₹60"
    },
    {
      name: "Tulip",
      image: "https://imgcdn.floweraura.com/forever-yours-floral-n-keepsake-box-9728670sdh-A_0.jpg?tr=w-304,dpr-1.5,q-70",
      price: "₹50"
    },
    {
      name: "Lily",
      image: "https://imgcdn.floweraura.com/SCK_3513.jpg?tr=w-304,dpr-1.5,q-70",
      price: "₹30"
    },
    {
      name: "Red Rose",
      image: "https://imgcdn.floweraura.com/DSC_1243_0.jpg?tr=w-304,dpr-1.5,q-70",
      price: "₹80"
    },
    {
      name: "Pink Rose",
      image: "https://imgcdn.floweraura.com/whispers-of-affection-pink-roses-bouquet-9802810fl-A_0.jpg?tr=w-304,dpr-1.5,q-70",
      price: "₹60"
    }
  ];

  // Add item to localStorage cart
  const handleAddToCart = (flower) => {
    const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const newItem = {
      name: flower.name,
      image: flower.image,
      price: flower.price,
    };

     const isAlreadyInCart = existingCart.some(item => item.name === flower.name);

  if (isAlreadyInCart) {
    alert(`${flower.name} is already in your cart.`);
    return;}
    // const updatedCart = [...existingCart, newItem];
    
    const updatedCart=[newItem,...existingCart]
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));


    
  
  };

 const handleAddToHeart = (flower) => {
  const existingHeart = JSON.parse(localStorage.getItem('heartItems')) || [];
  const newItem = {
    name: flower.name,
    image: flower.image,
    price: flower.price,
  };

  const isAlreadyInHeart = existingHeart.some(item => item.name === flower.name);

  if (isAlreadyInHeart) {
    alert(`${flower.name} is already in your heart list.`);
    return;
  }
  
  const updatedHeart = [newItem, ...existingHeart];
  localStorage.setItem('heartItems', JSON.stringify(updatedHeart));
};


  

  return (
    <div id='Product' className='product'>
      <ul>
        {flowers.map((flower, index) => (
          <li key={index}>
            <img src={flower.image} alt={flower.name} />
            {flower.name}
            <p>{flower.price}</p>
           <p className='proicon'> <i
              className="ri-shopping-cart-2-line"
             
              onClick={() => handleAddToCart(flower)}
              style={{ cursor: 'pointer', marginLeft: '10px' }}
            ></i>
            <i className="ri-heart-fill heart"
             onClick={() =>handleAddToHeart(flower)}
              style={{ cursor: 'pointer', marginLeft: '10px' }}
            ></i>
            </p>
            <button>Buy Now</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
