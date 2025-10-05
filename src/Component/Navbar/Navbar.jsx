// import React from 'react'
// import  { useState, useEffect } from 'react';

// import { Link } from 'react-scroll';
// import './Navbar.css'
// import { Link as ScrollLink } from 'react-scroll';
// import { Link as RouterLink } from 'react-router-dom';



// const Navbar = () => {
//    const [sticky ,setSticky]=useState(false)


//   useEffect(()=>{
//      window.addEventListener('scroll',()=>{
//       window.scrollY>50? setSticky(true):setSticky(false)
//      })
//   },[])
//   return (
//     <div className={`nav ${sticky ? 'dark-nav' : ''}`} >
//       <div className='navimg'><img src="https://www.fnp.com/icons/fnp-gift.svg" alt="" /></div>
//       <div className='content'>
//      <ul>
//   <li><ScrollLink to="Home" offset={-100} smooth={true} duration={700}>Home</ScrollLink></li>
//   <li><ScrollLink to="About" offset={-130} smooth={true} duration={700}>About</ScrollLink></li>
//   <li><ScrollLink to="Product" offset={-110} smooth={true} duration={700}>Product</ScrollLink></li>
//   <li><ScrollLink to="Reference" offset={-180} smooth={true} duration={700}>Reference</ScrollLink></li>
//   <li><ScrollLink to="Contact" offset={-120} smooth={true} duration={700}>Contact</ScrollLink></li>
// </ul>

//       </div>
//       <div className='icon'>
//       <ul>
//   <li>
//     {/* <i className="ri-heart-fill"></i> */}
//     <RouterLink to="/heart"> 
//       <i className="ri-heart-fill" style={{ fontSize: '18px',color: 'black'}}></i>
//     </RouterLink>
//   </li>
//   <li>
//     <RouterLink to="/cart">
//     <i class="ri-shopping-cart-2-fill" style={{ fontSize: '18px',color: 'black' }}></i>
//     </RouterLink>
//   </li>
//   <li>
//     {/* <i className="ri-user-fill" style={{ fontSize: '18px' ,color: 'black'}}></i> */}
//     <RouterLink to="/person">
//     <i className="ri-user-fill" style={{ fontSize: '18px' ,color: 'black'}}></i>
//     </RouterLink>
//     </li>
// </ul>
//       </div>
//     </div>
//   )
// }

// export default Navbar




import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const location = useLocation();
  const hideScrollLinks = ['/cart', '/heart', '/person'].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`nav ${sticky ? 'dark-nav' : ''}`}>
      <div className='navimg'>
        <img src="https://www.fnp.com/icons/fnp-gift.svg" alt="Logo" />
      </div>

      {!hideScrollLinks && (
        <div className='content'>
          <ul>
            <li><ScrollLink to="Home" offset={-100} smooth={true} duration={700}>Home</ScrollLink></li>
            <li><ScrollLink to="About" offset={-130} smooth={true} duration={700}>About</ScrollLink></li>
            <li><ScrollLink to="Product" offset={-110} smooth={true} duration={700}>Product</ScrollLink></li>
            <li><ScrollLink to="Reference" offset={-180} smooth={true} duration={700}>Reference</ScrollLink></li>
            <li><ScrollLink to="Contact" offset={-120} smooth={true} duration={700}>Contact</ScrollLink></li>
          </ul>
        </div>
      )}

      <div className='icon'>
        <ul>
          <li>
            <RouterLink to="/heart">
              <i className="ri-heart-fill" style={{ fontSize: '18px', color: 'black' }}></i>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/cart">
              <i className="ri-shopping-cart-2-fill" style={{ fontSize: '18px', color: 'black' }}></i>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/person">
              <i className="ri-user-fill" style={{ fontSize: '18px', color: 'black' }}></i>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
