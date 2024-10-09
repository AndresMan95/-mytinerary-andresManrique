import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import Carousel from '../components/Carrusel';

function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-cover bg-center h-screen" /* style={{ backgroundImage: 'url(/src/assets/hero-image.jpg)' }} */>

      <HeroSection />
     {/*  <h1 className="text-5xl font-bold text-black">MyTinerary</h1>
      <p className="text-xl mt-4 text-black text-center px-4">Find your perfect trip, designed by insiders who know and love their cities!</p> */}
      <div>
        <Carousel />
      </div>
      <Link to="/cities" className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-600">
        Explore Cities
      </Link> 
    </div>
  );
}

export default Home;
