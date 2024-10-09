import { useState, useEffect, useRef } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);

  const slides = [
    {
      title: 'Popular MyTineraries',
      images: [
        { src: '/src/assets/cities/new-york.jpg', name: 'New York' },
        { src: '/src/assets/cities/paris.jpg', name: 'Paris' },
        { src: '/src/assets/cities/london.jpg', name: 'London' },
        { src: '/src/assets/cities/tokyo.jpg', name: 'Tokyo' },
      ],
    },
    {
      title: 'Popular MyTineraries',
      images: [
        { src: '/src/assets/cities/sydney.jpg', name: 'Sydney' },
        { src: '/src/assets/cities/barcelona.jpg', name: 'Barcelona' },
        { src: '/src/assets/cities/rome.jpg', name: 'Rome' },
        { src: '/src/assets/cities/berlin.jpg', name: 'Berlin' },
      ],
    },
    {
      title: 'Popular MyTineraries',
      images: [
        { src: '/src/assets/cities/dubai.jpg', name: 'Dubai' },
        { src: '/src/assets/cities/cape-town.jpg', name: 'Cape Town' },
        { src: '/src/assets/cities/los-angeles.jpg', name: 'Los Angeles' },
        { src: '/src/assets/cities/singapore.jpg', name: 'Singapore' },
      ],
    },
  ];

  const startSlideShow = () => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const stopSlideShow = () => {
    if (slideInterval.current) clearInterval(slideInterval.current);
  };

  useEffect(() => {
    startSlideShow();
    return () => stopSlideShow();
  }, []);

  const nextSlide = () => {
    stopSlideShow();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    startSlideShow();
  };

  const prevSlide = () => {
    stopSlideShow();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    startSlideShow();
  };

  return (
    <>
      <div className="relative max-w-5xl mx-auto p-6 my-12 bg-black/50 rounded-lg overflow-hidden">
        <h2 className="text-2xl font-bold text-center mb-8 text-white">{slides[currentSlide].title}</h2>
  
        {/* Carrusel de imágenes */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex justify-center items-center space-x-4 px-6"
              style={{ width: '100%' }}
            >
              {slide.images.map((image, imgIndex) => (
                <div key={imgIndex} className="flex flex-col items-center space-y-2">
                  <img
                    src={image.src}
                    alt={image.name}
                    className="w-48 h-32 object-cover rounded-md sm:w-40 sm:h-28 md:w-48 md:h-32 lg:w-56 lg:h-40 transform transition-transform duration-300 hover:scale-110"
                  />
                  <p className="text-sm sm:text-xs md:text-base text-white">{image.name}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
  
        {/* Botones Prev y Next dentro del carrusel */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg opacity-75 hover:opacity-100 transition-opacity duration-200 z-10"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg opacity-75 hover:opacity-100 transition-opacity duration-200 z-10"
        >
          Next
        </button>
      </div>
    </>
  );
  
    
    

};

export default Carousel;
