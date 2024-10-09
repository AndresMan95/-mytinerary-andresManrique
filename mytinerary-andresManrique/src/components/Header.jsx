function Header() {
  return (
    <header className="bg-gray-800 bg-opacity-70 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src="/src/assets/logoMyTinerary.png" alt="Logo" className="h-12 w-auto" />
        <h1 className="text-xl font-bold">MyTinerary</h1>
      </div>
      <nav className="flex space-x-4">
        <a className="hover:text-gray-400" href="/">Home</a>
        <a className="hover:text-gray-400" href="/cities">Cities</a>
      </nav>
      <div className="flex items-center">
        <img src="/src/assets/login.gif" alt="Login" className="h-10 w-10 rounded-full" />
      </div>
    </header>
  );
}

export default Header;
