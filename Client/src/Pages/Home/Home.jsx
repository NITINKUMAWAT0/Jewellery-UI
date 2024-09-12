import './Home.scss';
import Carousel from '../../Components/Carousel_Component/Carousel';
import HomeProducts from '../../Components/Home_Products/HomeProducts';
import Banners from '../../Components/Banners/Banners';
const Home = () => {
  return (
    <div className='home'>
      <Carousel />
      <HomeProducts/>
      <Banners/>
    </div>
  )
}

export default Home