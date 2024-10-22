function Footer() {
  return (
    <footer className="bg-gray-800 bg-opacity-70 text-white p-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Información adicional */}
        <div className="flex flex-col mb-4 md:mb-0 md:w-2/3">
          <div className="flex flex-col md:flex-row md:justify-between mb-4">
            {/* Menú de navegación adicional */}
            <nav className="flex flex-col md:flex-row md:space-x-4 mb-4">
              <a href="/about" className="hover:text-gray-400">About Us</a>
              <a href="/contact" className="hover:text-gray-400">Contact</a>
              <a href="/faq" className="hover:text-gray-400">FAQ</a>
              <a href="/terms" className="hover:text-gray-400">Terms of Service</a>
              <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
            </nav>
            
            {/* Información adicional */}
            {/* <div className="text-center md:text-right">
              <p className="text-sm">123 Main St, City, Country</p>
              <div className="flex justify-center md:justify-end space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src="/src/assets/facebook-icon.png" alt="Facebook" className="h-6 w-6" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src="/src/assets/twitter-icon.png" alt="Twitter" className="h-6 w-6" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src="/src/assets/instagram-icon.png" alt="Instagram" className="h-6 w-6" />
                </a>
              </div>
            </div> */}

          
          </div>
              <div>
              <p className="text-left text-sm">© 2024 MyTinerary. All rights reserved.</p>
              </div>
         
        </div>

        {/* Mapa */}
        <div className="md:w-1/3 md:ml-4">
          <h2 className="text-lg font-bold text-center md:text-left mb-2">Find Us Here:</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345083034!2d144.95373631531886!3d-37.817209979751036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0d7c68d1%3A0x5045675218ceed8!2sVictoria%20Street%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1616572891234!5m2!1sen!2sus"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Map"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
