import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='u-footer'>
      <div className="f1">
        <h1>Assistance</h1>
        <p>Call us: +1-000-000-0111</p>
        <p>Chat With Us</p>
        <p>FAQ</p>
        <p>Find Store</p>
      </div>
      <div className="f2">
        <h1>About us</h1>
        <p>Our Story</p>
        <p>Customer Reviews</p>
        <p>The Blog</p>
        <p>Privacy-Policy</p>
      </div>
      <div className="f3">
        <h1>Shop</h1>
        <p>Lab Grown Jewellery</p>
        <p>Diamond Jewellery</p>
        <p>Emerald </p>
        <p>Gold Jewellery</p>
        <p>Bracelets</p>
        <p>Earings</p>
      </div>
      </div>
 

    <hr className='hr-tag'/>

    <div className="icons">
      <img src='https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logotype-logok-25.png' alt="" style={{width:'140px'}}/>
      <img src="https://download.logo.wine/logo/Amazon_Pay/Amazon_Pay-Logo.wine.png" alt="" />
      <p className='rights'>© 2024 Jwells Inc. All Rights Reserved.</p>
    </div>
       </div>
  )
}

export default Footer