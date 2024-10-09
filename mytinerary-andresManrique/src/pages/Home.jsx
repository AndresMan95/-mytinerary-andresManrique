import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
 import Carousel from '../components/Carousel'; // Descomenta solo cuando se resuelva el error

function Home() {
  return (
    <div className="flex flex-col items-center bg-cover bg-center min-h-screen py-12">
      <HeroSection />
      <div className="w-full max-w-5xl my-12">
        <Carousel />
      </div>
      <Link to="/cities" className="mt-6 bg-opacity-70 bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-600">
        Explore Cities
      </Link>
    </div>
  );
}

export default Home;
