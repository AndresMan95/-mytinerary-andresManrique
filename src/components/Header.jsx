import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src="/src/assets/logoMyTinerary.png" alt="Logo" className="h-12 w-auto" />
        <h1 className="text-xl font-bold">MyTinerary</h1>
      </div>
      <nav className="flex space-x-4">
        <Link className="hover:text-gray-400" to="/">Home</Link>
        <Link className="hover:text-gray-400" to="/cities">Cities</Link>
      </nav>
      <div>
        {isAuthenticated ? (
          <button onClick={handleLogout} className="hover:text-gray-400">Logout</button>
        ) : (
          <Link to="/login">
            <img src="/src/assets/login.gif" alt="Login" className="h-10 w-10 rounded-full" />
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
