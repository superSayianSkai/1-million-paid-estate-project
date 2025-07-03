import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Bed, Bath, Square, Star } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import 'aos/dist/aos.css';

interface House {
  id: number;
  image: string;
  title: string;
  description: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  price: string;
  rating: number;
}

const HouseCarousel2: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const houses: House[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Modern Family Villa",
      description: "Stunning contemporary home featuring open-plan living, premium finishes, and breathtaking views. Perfect for families seeking luxury and comfort in a prime location.",
      location: "Beverly Hills, CA",
      bedrooms: 3,
      bathrooms: 2,
      area: 2800,
      price: "$2,450,000",
      rating: 4.8
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Luxury Waterfront Estate",
      description: "Exceptional waterfront property with private beach access, infinity pool, and state-of-the-art amenities. An architectural masterpiece designed for elegant living.",
      location: "Malibu, CA",
      bedrooms: 2,
      bathrooms: 2,
      area: 4200,
      price: "$8,750,000",
      rating: 4.9
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Contemporary Urban Loft",
      description: "Sleek downtown loft with floor-to-ceiling windows, exposed brick walls, and premium appliances. Perfect for professionals seeking modern city living.",
      location: "Manhattan, NY",
      bedrooms: 1,
      bathrooms: 1,
      area: 1400,
      price: "$1,250,000",
      rating: 4.6
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === houses.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? houses.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative mt-[100px] z-2 py-16 px-4">
        <div className="absolute -top-28 -left-48   h-60 md:w-[400px] md:h-[500px] rounded-full bg-gradient-to-tr from-blue-400 to-green-500 opacity-10 blur-2xl "></div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-yellow-400 font-medium mb-2">Explore Our Properties</p>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Luxury Homes</h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {houses.map((house) => (
                <div key={house.id} className="min-w-full bg-white">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative h-80 md:h-96">
                      <img 
                        src={house.image} 
                        alt={house.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full shadow-lg">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-sm">{house.rating}</span>
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg">
                        <span className="font-bold text-lg">{house.price}</span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        {house.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-gray-600 mb-4">
                        <MapPin className="w-4 h-4" />
                        <span>{house.location}</span>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {house.description}
                      </p>

                      {/* Property Features */}
                      <div className="flex gap-6 mb-6">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Bed className="w-5 h-5 text-yellow-400" />
                          <span className="max-md:text-[.8rem] font-medium">{house.bedrooms} Beds</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <Bath className="w-5 h-5 text-yellow-500" />
                          <span className="max-md:text-[.8rem]  font-medium">{house.bathrooms} Baths</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <Square className="w-5 h-5 text-yellow-500" />
                          <span className="max-md:text-[.8rem]  font-medium">{house.area.toLocaleString()} sq ft</span>
                        </div>
                      </div>

                      <NavLink to="/demo" className="bg-yellow-400 hover:bg-yellow-300 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 w-fit">
                        View Details
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 top-[20%] md:top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-2 md:p-3 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="text-sm md:w-6 md:h-6 text-gray-600 cursor-pointer" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-[20%] md:top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-2 md:p-3 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="text-sm md:w-6 md:h-6 text-gray-600 cursor-pointer" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {houses.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-yellow-400 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseCarousel2;