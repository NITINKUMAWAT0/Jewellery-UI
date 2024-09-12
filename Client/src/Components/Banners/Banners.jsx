import "./Banners.scss";
import b1 from "../../assets/b1.jpg";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

const Banners = () => {
  return (
    <>
      <div className="banner-header">
        <h1 className="heading">~ Forever Starts Here ~</h1>
        <div className="banner-img">
          <div className="banner1">
            <img
              src="https://assets.angara.com/promotion/banners/engdesktop.jpg?width=1440&quality=95"
              alt=""
            />
            <h2 className="h-one">Engagement Rings</h2>
          </div>
          <div className="banner2">
            <img
              src="https://assets.angara.com/promotion/banners/DeskWED.jpg?width=1440&quality=95"
              alt=""
            />
            <h2 className="h-two">Wedding Rings</h2>
          </div>
        </div>
      </div>

      <div className="Reasons">
        <h1>~ More Reasons to Shop ~</h1>
        <div className="r">
          <div className="reasons-img">
            <img
              src="https://assets.angara.com/assets/homepage-Assets/us/trust-icons/ethical-sourcing.svg?width=96&quality=95"
              alt=""
            />
            <p>Ethical Sourcing</p>
          </div>
          <div className="reasons-img">
            <img
              src="https://assets.angara.com/assets/homepage-Assets/us/trust-icons/step-by-step-inspection.svg?width=96&quality=95"
              alt=""
            />
            <p>Authenticity Guaranteed</p>
          </div>
          <div className="reasons-img">
            <img
              src="https://assets.angara.com/assets/homepage-Assets/us/trust-icons/customer-review.svg?width=96&quality=95"
              alt=""
            />
            <p>High Speed Service</p>
          </div>
          <div className="reasons-img">
            <img
              src="https://assets.angara.com/assets/homepage-Assets/us/trust-icons/shine-now-pay-later.svg?width=96&quality=95"
              alt=""
            />
            <p>Shine Now. Pay Later</p>
          </div>
        </div>
      </div>

      <h1>~ Curated by Our Master Jewelers ~</h1>
      <div className="collections">
        <div className="collection-section">
          <img
            src="https://assets.angara.com/assets/homepage-Assets/us/collections/celestial-collection.jpg?width=768&quality=95"
            alt=""
          />
          <p>Celestial Collections</p>
        </div>
        <div className="collection-section">
          <img
            src="https://assets.angara.com/assets/homepage-Assets/us/collections/sweet-treat.jpg?width=768&quality=95"
            alt=""
          />
          <p>Sweet Treats Collection</p>
        </div>
        <div className="collection-section">
          <img
            src="https://assets.angara.com/assets/homepage-Assets/us/collections/aeon-collection.jpg?width=768&quality=95"
            alt=""
          />
          <p>Aeon Colletion</p>
        </div>
      </div>

      <div className="lower-banner">
        <img src={b1} alt="" />

        <div className="section">
          <h1>From the Lab of Luxury</h1>

          <p>
            Marrying brilliant design and cutting-edge technology, our lab-grown
            diamond and gemstone jewelry guarantees maximum sparkle for your
            spend.
          </p>
          <button className="btn">Shop Lab-Grown</button>
        </div>
      </div>

      <div className="signup-mail">
        <h1>
          Get <span> 12% off</span> on your first order
        </h1>
        <div className="input">
          <input type="text" placeholder="Enter Email Address*" />
          <button>Sign up</button>
        </div>
        <div className="follow">
          <p>
            Your privacy matters. For details, see our
            <span> Privacy Policy.</span>
          </p>
        </div>
        <p>
          Follow us: <FacebookOutlinedIcon className="icon" />
          <XIcon className="icon" />
          <InstagramIcon className="icon" />
        </p>
      </div>
    </>
  );
};

export default Banners;
