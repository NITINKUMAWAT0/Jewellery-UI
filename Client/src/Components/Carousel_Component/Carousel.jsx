import './Carousel.scss'

const  Carousel = () => {
  return (
     <div className="banner">
      <div className="slider" style={{ '--quantity': 10 }}>
        <div className="item" style={{ '--position': 1 }}>
          <img src='https://assets.angara.com/promotion/banners/B%20test/desktop/Customised%20banner%20desktop.jpg?width=768&quality=95' alt="Dragon 1" />
        </div>
        <div className="item" style={{ '--position': 2 }}>
          <img src="https://assets.angara.com/promotion/Catalog%20Lab%20Banners%20with%20CTA/Earring_Desktop_updated.jpg?width=1024&quality=95" alt="Dragon 2" />
        </div>
        <div className="item" style={{ '--position': 3 }}>
          <img src="https://assets.angara.com/promotion/Catalog%20Lab%20Banners%20with%20CTA/Tennis%20Bracelet_Desktop_updated.jpg?width=1024&quality=95" alt="Dragon 3" />
        </div>
        <div className="item" style={{ '--position': 4 }}>
          <img src="https://assets.angara.com/promotion/Catalog%20Lab%20Banners%20with%20CTA/Nacklace_Desktop_updated.jpg?width=1024&quality=95" alt="Dragon 4" />
        </div>
        <div className="item" style={{ '--position': 5 }}>
          <img src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9586768f/images/hi-res/502889FCHAA02_2.jpg" alt="Dragon 5" />
        </div>
        <div className="item" style={{ '--position': 6 }}>
          <img src="https://assets.angara.com/common-images/brownbox-with-outerbox.jpg?width=940&quality=95&width=768&quality=95" alt="Dragon 6" />
        </div>
        <div className="item" style={{ '--position': 7 }}>
          <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd7c0d1bd/images/hi-res/3023NEE.jpg?sw=640&sh=640" alt="Dragon 7" />
        </div>
        <div className="item" style={{ '--position': 8 }}>
          <img src="https://assets.angara.com/pendant/sp0731amd/sp0731amd_250.jpg?width=768&quality=95" alt="Dragon 8" />
        </div>
        <div className="item" style={{ '--position': 9 }}>
          <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw68bbae49/images/hi-res/50D4FFBCKAA02_1.jpg?sw=640&sh=640" alt="Dragon 9" />
        </div>
        <div className="item" style={{ '--position': 10 }}>
          <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw91d814fe/images/hi-res/2818OWE.jpg?sw=640&sh=640" alt="Dragon 10" />
        </div>
      </div>
      <div className="content">
        <h1 data-content="Shop Now">Shop Now</h1>
        <div className="author">
          <h2>BETTERZO</h2>
          <p>Be expressive</p>
          <p>make memories with your special ones</p>
        </div>
        <div className="model"></div>
      </div>
    </div>
  )
}

export default  Carousel;