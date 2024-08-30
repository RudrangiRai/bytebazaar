import React, { useState } from 'react' ;
import './Navbar.css'
import logo from '../Assets/logo23.jpg'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu,setMenu] = useState("shop");
  return (
    <div className='navbar'>
        <div className='navbar'>
            <img src={logo} alt="" />
            <p>BYTEBAZAAR</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}}to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("laptops")}}><Link style={{textDecoration:'none'}}to='/laptops'>Laptops</Link>{menu==="laptops"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("headphones")}}><Link style={{textDecoration:'none'}}to='/headphones'>Headphones</Link>{menu==="headphones"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("phones")}}><Link style={{textDecoration:'none'}}to='/phones'>Phones</Link>{menu==="phones"?<hr/>:<></>}</li>
        </ul>

        <div className="nav-login-cart">
          { <Link to='/login'><button>Login</button></Link> }
          <Link to='/cart'><img src={cart_icon} alt="" /></Link>
          <div className="nav-cart-count">0</div>
        </div>
      
    </div>
  );
};

export default Navbar
