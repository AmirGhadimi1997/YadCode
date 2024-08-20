

import { useState } from 'react';

function Mahshad_Pic() {
  const images = [
    '/images/Mahshad.jpg',
    '/images/Mahshad_Pic2.jpg',
    '/images/Mahshad_Pic3.jpg',
  ];


  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };



  return (
    <div className="relative w-8/12 h-[500px] flex justify-center items-center">
      <div className="absolute inset-0 flex justify-between items-center">
        <button
          onClick={prevSlide}
          className="text-white bg-gray-800 p-2 rounded-full bg-opacity-50 hover:bg-opacity-75"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="text-white bg-gray-800 p-2 rounded-full bg-opacity-50 hover:bg-opacity-75"
        >
          &#10095;
        </button>
      </div>


      <div className="w-full h-full overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Mahshad ${currentIndex + 1}`}
          className="w-full h-full object-cover transition duration-500 ease-in-out"
        />
      </div>



      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>



  );
}

export default Mahshad_Pic;