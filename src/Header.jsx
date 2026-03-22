import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { clearCart } from './redux/slice';
import { Link } from 'react-router-dom';

const Header = () => {
  const cartSelector = useSelector((state) => state.cart.value);
  //console.log("cartCount--",cartSelector.length);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo"><Link to="/products" className='link'>MyStore</Link></div>

        <nav className="nav">
          <li> <Link to="/products">Products</Link></li>
          <li> <Link to="/cart">Cart</Link></li>
        </nav>

        <div className="cart">
          <button className="cart-button" onClick={() => dispatch(clearCart())}>Clear Cart</button>
          <Link to="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" className="cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="cart-count">{ cartSelector.length ? cartSelector.length : 0 }</span>
          </Link>
        </div>
      </div>
    </header>

  );

}

export default Header;