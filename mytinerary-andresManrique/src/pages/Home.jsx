import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}>
  <h1 className="text-5xl font-bold text-white">MyTinerary</h1>
  <p className="text-xl mt-4 text-white">Find your perfect trip, designed by insiders who know and love their cities!</p>
  <Link to="/cities" className="mt-6 bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600">
    Explore Cities
  </Link>
</div>

  );
}

export default Home;
