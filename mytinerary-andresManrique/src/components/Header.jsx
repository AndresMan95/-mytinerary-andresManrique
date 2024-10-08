import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1>MyTinerary</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cities">Cities</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
