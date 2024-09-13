import "./Navbar.scss";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Logo from "../../assets/Logo.jpg";

const Navbar = () => {
  return (
    <div className="nav">
      {/* Upper Navigation */}
      <div className="upper-nav">
        <img src={Logo} alt="Logo" className="logo" />

        <input
          className="search-input"
          type="text"
          placeholder="Search for Diamond Jewellery, Gold..."
        />

        <div className="nav-icons">
          <PersonOutlineOutlinedIcon className="profile" />
          <FavoriteBorderOutlinedIcon className="heart" />
          <ShoppingCartOutlinedIcon className="cart" />
        </div>
      </div>

      {/* Lower Navigation with Dropdowns */}
      <div className="lower-nav">
        {/* Gold Dropdown */}
        <div className="nav-item">
          <p className="nav-t">Gold</p>
          <div className="dropdown-content">
            <p>Gold Necklace</p>
            <p>Gold Bracelet</p>
            <p>Gold Earrings</p>
          </div>
        </div>

        {/* Diamond Dropdown */}
        <div className="nav-item">
          <p className="nav-t">Diamond</p>
          <div className="dropdown-content">
            <p>Diamond Ring</p>
            <p>Diamond Earrings</p>
            <p>Diamond Necklace</p>
            <p>Diamond Bracelets</p>
          </div>
        </div>

        {/* Earrings Dropdown */}
        <div className="nav-item">
          <p className="nav-t">Earrings</p>
          <div className="dropdown-content">
            <p>Lab Diamond Earrings</p>
            <p>Gold Earrings</p>
            <p>Diamond Earrings</p>
            <p>Lab Ruby Earrings</p>
          </div>
        </div>

        {/* Rings */}
        <div className="nav-item">
          <p className="nav-t">Rings</p>
          <div className="dropdown-content">
            <p>Gold Rings</p>
            <p>Diamond Rings</p>
            <p>Lab Diamond Rings</p>
            <p>Silver Rings</p>
          </div>
        </div>

        {/* Collection Dropdown */}
        <div className="nav-item">
          <p className="nav-t">Collection</p>
          <div className="dropdown-content">
            <p>Summer Collection</p>
            <p>Winter Collection</p>
            <p>Exclusive Collection</p>
          </div>
        </div>

        {/* Wedding */}
        <div className="nav-item">
          <p className="nav-t">Wedding</p>
          <div className="dropdown-content">
            <p>Wedding Collection</p>
            <p>Wedding Rings</p>
            <p>Wedding Gifts</p>
          </div>
        </div>

        {/* Gifts Dropdown */}
        <div className="nav-item">
          <p className="nav-t">Gifts</p>
          <div className="dropdown-content">
            <p>Gift Cards</p>
            <p>Special Gifts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
