import "./HomeProducts.scss";

const HomeProducts = () => {
  return (
    <>
      {/* Upper Carousel */}
      <div className="upper-carousel">
        <h1>~ Most Loved on Jwells ~</h1>
        <div className="carousel-container">
          <button
            className="carousel-btn-left"
            onClick={() => scrollCarousel(-1)}
          >
            &#10094;
          </button>
          <div className="carousel-items" id="carousel">
            <div className="carousel-card">
              <img
                src="https://assets.angara.com/ring/sr1437d/3.2mm-gvs2-diamond-p950-platinum-ring.jpg?width=256&quality=95"
                alt="Product 1"
              />
              <p>Product 1 Name</p>
            </div>
            <div className="carousel-card">
              <img
                src="https://assets.angara.com/earrings/se1510op/8x6mm-aaaa-opal-yellow-gold-earrings.jpg?width=256&quality=95"
                alt="Product 2"
              />
              <p>Product 2 Name</p>
            </div>
            <div className="carousel-card">
              <img
                src="https://assets.angara.com/pendant/sp1084aqd/6mm-aaaa-aquamarine-white-gold-pendant.jpg?width=256&quality=95"
                alt="Product 3"
              />
              <p>Product 3 Name</p>
            </div>
            <div className="carousel-card">
              <img
                src="https://assets.angara.com/pendant/sp1081gd/6mm-aaaa-garnet-yellow-gold-pendant.jpg?width=256&quality=95"
                alt="Product 4"
              />
              <p>Product 4 Name</p>
            </div>
            <div className="carousel-card">
              <img
                src="https://assets.angara.com/earrings/se1742sd/2.8mm-aaa-blue-sapphire-white-gold-earrings.jpg?width=256&quality=95"
                alt="Product 4"
              />
              <p>Product 4 Name</p>
            </div>
            <div className="carousel-card">
              <img
                src="https://assets.angara.com/earrings/lse0976d/6.4mm-fgvs-lab-grown-diamond-18k-white-gold-earrings.jpg?width=256&quality=95"
                alt="Product 4"
              />
              <p>Product 4 Name</p>
            </div>
            <div className="carousel-card">
              <img
                src="https://assets.angara.com/earrings/lse1669d/2.5mm-fgvs-lab-grown-diamond-white-gold-earrings.jpg?width=256&quality=95"
                alt="Product 4"
              />
              <p>Product 4 Name</p>
            </div>
            <div className="carousel-card">
              <img
                src="https://assets.angara.com/ring/sr1080op/10x8mm-aaaa-opal-white-gold-ring.jpg?width=256&quality=95"
                alt="Product 4"
              />
              <p>Product 4 Name</p>
            </div>
            <div className="carousel-card">
              <img
                src="https://assets.angara.com/ring/wrgd_sr0118rd/3mm-aaa-ruby-18k-white-gold-ring.jpg?width=256&quality=95"
                alt="Product 4"
              />
              <p>Product 4 Name</p>
            </div>
            <div className="carousel-card">
              <img
                src="https://assets.angara.com/pendant/sp0818s/7x5mm-aaa-blue-sapphire-white-gold-pendant.jpg?width=256&quality=95"
                alt="Product 4"
              />
              <p>Product 4 Name</p>
            </div>
            <div className="carousel-card">
              <img
                src="https://assets.angara.com/pendant/sp0169amd/8x6mm-aaaa-amethyst-white-gold-pendant.jpg?width=256&quality=95"
                alt="Product 4"
              />
              <p>Product 4 Name</p>
            </div>
            {/* Add more cards if needed */}
          </div>
          <button
            className="carousel-btn-right"
            onClick={() => scrollCarousel(1)}
          >
            &#10095;
          </button>
        </div>
      </div>

      {/* Lower Carousel */}
      <div className="lower-carousel">
        <h1>~ Gifts That Say It All ~</h1>
        <div className="gifts">
          <div className="gifts-cards">
            <img
              src="https://assets.angara.com/assets/homepage-Assets/us/gifts/price-1.jpg?width=256&quality=95"
              alt="Price Range 1"
            />
            <p>$500-$1000</p>
          </div>
          <div className="gifts-cards">
            <img
              src="https://assets.angara.com/assets/homepage-Assets/us/gifts/price-2.jpg?width=256&quality=95"
              alt="Price Range 2"
            />
            <p>$1000-$2500</p>
          </div>
          <div className="gifts-cards">
            <img
              src="https://assets.angara.com/assets/homepage-Assets/us/gifts/price-3.jpg?width=256&quality=95"
              alt="Price Range 3"
            />
            <p>Over $2500</p>
          </div>
          <div className="gifts-cards">
            <img
              src="https://assets.angara.com/assets/homepage-Assets/us/gifts/birthday-gifts.jpg?width=256&quality=95"
              alt="Birthday Gifts"
            />
            <p>Birthday Gifts</p>
          </div>
          <div className="gifts-cards">
            <img
              src="https://assets.angara.com/assets/homepage-Assets/us/gifts/promise-rings.jpg?width=256&quality=95"
              alt="Promise Rings"
            />
            <p>Promise Rings</p>
          </div>
        </div>
      </div>
    </>
  );
};

const scrollCarousel = (direction) => {
  const carousel = document.getElementById("carousel");
  const scrollAmount = 300; // Customize the scroll amount as needed
  carousel.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
};

export default HomeProducts;
