

import React, { useState, useEffect } from 'react';
import candle_light from '/images/candle-lights.jpg';
import candle_light2 from '/images/candle-lights2.jpg';
import banner from '/images/ws-banner -new.png'
import dashain from '/images/dashain.webp';
import teej from '/images/teej-group.webp';

export default function Hero() {

  const slides = [
    {
    id: 1,
    img: candle_light,
    description: 'Expressing Deep Condolence to Gen-Z Martyr'
    },
    {
      id: 2,
      img: dashain,
      description: 'Executive committee members - 2025'
      },

      {
        id: 3,
        img: teej,
        description: 'Community gathering on occassion of Teej - 2025 🎉'
        },

  ];

  const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-slide effect
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000); // Change slide every 5 seconds
      return () => clearInterval(timer); // Cleanup on unmount
    }, []);

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
      setCurrentSlide(index);
    };

    return (
      <div className="relative w-full max-w-4xl mx-auto sm:min-w-screen" id="home">
        {/* Carousel Container */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <div className="relative h-96 sm:min-h-[700px]">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={slide.img}
                  alt={slide.description}
                  className="w-full h-full object-contain sm:object-cover sm:min-h-[500px]"
                />
                <div className="absolute bottom-0 w-full bg-linear-to-l from-pink-700 to-purple-600 bg-opacity-50 text-white p-4">
                  <p className="text-sm text-center">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
          aria-label="Previous slide"
        >
          &larr;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
          aria-label="Next slide"
        >
          &rarr;
        </button>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-blue-600' : 'bg-gray-400'
              } hover:bg-blue-500 focus:outline-none`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    );
  };

  return <Carousel />;
}
