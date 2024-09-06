import React from 'react';
import './Navbar.scss';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Logo from '../../assets/Logo.png';

const Navbar = () => {
  return (
    <div className="nav">
      <div className="upper-nav">
        <img src={Logo} alt="" className='logo'/>
        <input className='search-input' type="text" placeholder='Search for Diamond Jewellery, Gold...' />
        <div>
        <PersonOutlineOutlinedIcon className='profile'/>
        <FavoriteBorderOutlinedIcon className='heart'/>
        <ShoppingCartOutlinedIcon className='cart' />
        </div>

      </div>
      <div className="lower-nav">
        <p className='nav-t'>Gold</p>
        <p className='nav-t'>Diamond</p>
        <p className='nav-t'>Earrings</p>
        <p className='nav-t'>Rings</p>
        <p className='nav-t'>Collection</p>
        <p className='nav-t'>Wedding</p>
        <p className='nav-t'>Gifts</p>
      </div>
    </div>
  )
}

export default Navbar