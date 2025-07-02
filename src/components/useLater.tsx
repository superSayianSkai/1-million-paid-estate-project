import React, { useState, useEffect } from 'react';
import image from "../assets/image.avif"
import photo from "../assets/photo.avif"
import Nav from './Nav';
import { MapPin, Star, ArrowRight, Users, Award, TrendingUp, Home } from 'lucide-react';

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  type: string;
  rating: number;
  features: string[];
}

const HousingPortfolioLanding: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProperties: Property[] = [
    {
      id: 1,
      title: "Luxury Downtown Penthouse",
      location: "Manhattan, NY",
      price: "$2,500,000",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      type: "Penthouse",
      rating: 4.9,
      features: ["3 Bedrooms", "2 Bathrooms", "City View", "Rooftop Access"]
    },
    {
      id: 2,
      title: "Modern Suburban Villa",
      location: "Beverly Hills, CA",
      price: "$1,850,000",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      type: "Villa",
      rating: 4.8,
      features: ["4 Bedrooms", "3 Bathrooms", "Pool", "Garden"]
    },
    {
      id: 3,
      title: "Waterfront Condo",
      location: "Miami Beach, FL",
      price: "$950,000",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      type: "Condo",
      rating: 4.7,
      features: ["2 Bedrooms", "2 Bathrooms", "Ocean View", "Balcony"]
    }
  ];

  const stats = [
    { icon: Home, label: "Properties Sold", value: "1,200+" },
    { icon: Users, label: "Happy Clients", value: "850+" },
    { icon: Award, label: "Awards Won", value: "25+" },
    { icon: TrendingUp, label: "Years Experience", value: "15+" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProperties.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-hidden">
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
        <div className="ml-20 ">
          <div className="grid lg:grid-cols-2 gap-12 ">
            {/* Left Content */}
            <div className={` border-2  transform transition-all duration-1000 py-30 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Find The Place To
                <br />
                Live{' '}
                <span className="text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
                  Your Dreams
                </span>
                <br />
                <span className="text-purple-800">Easily Here</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-md">
                Everything you need about finding your place to live will be here,
                where it will be easier for you
              </p>

            </div>

            {/* Right Content - Property Image with Overlays */}
            <div className="relative border-2">
              <div className="relative overflow-hidden shadow-2xl h-[550px] rounded-bl-[20%] ">
                <img
                  src={photo}
                  alt="Modern House"
                  className="object-cover h-[100%]"
                />
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl opacity-80 -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl opacity-60 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 rounded-2xl mb-4 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
                  <stat.icon className="w-8 h-8 mx-auto text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Properties
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Handpicked luxury properties that redefine modern living
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <div
                key={property.id}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl overflow-hidden hover:from-white/20 hover:to-white/10 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl border border-white/10"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {property.type}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm">{property.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-gray-400 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.features.map((feature, idx) => (
                      <span key={idx} className="bg-white/10 px-2 py-1 rounded-lg text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-400">{property.price}</span>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-full group-hover:from-blue-600 group-hover:to-purple-700 transition-all transform group-hover:scale-110">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
              View All Properties
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Why Choose EliteHomes?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                With over 15 years of experience in luxury real estate, we've built our reputation on delivering exceptional service and connecting clients with their perfect homes.
              </p>
              <div className="space-y-4">
                {[
                  "Exclusive access to premium properties",
                  "Personalized consultation and support",
                  "Expert market analysis and insights",
                  "Comprehensive after-sales service"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
                  alt="Modern architecture"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts guide you through the journey of finding the perfect property that matches your lifestyle and dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
              Schedule Consultation
            </button>
            <button className="border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm">
              Browse Properties
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                EliteHomes
              </div>
              <p className="text-gray-400">Your gateway to luxury living</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-gray-400">
                <div><a href="#" className="hover:text-white transition-colors">Properties</a></div>
                <div><a href="#" className="hover:text-white transition-colors">About Us</a></div>
                <div><a href="#" className="hover:text-white transition-colors">Services</a></div>
                <div><a href="#" className="hover:text-white transition-colors">Contact</a></div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Property Types</h3>
              <div className="space-y-2 text-gray-400">
                <div><a href="#" className="hover:text-white transition-colors">Penthouses</a></div>
                <div><a href="#" className="hover:text-white transition-colors">Villas</a></div>
                <div><a href="#" className="hover:text-white transition-colors">Condos</a></div>
                <div><a href="#" className="hover:text-white transition-colors">Apartments</a></div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <div>+1 (555) 123-4567</div>
                <div>info@elitehomes.com</div>
                <div>123 Luxury Ave, NY 10001</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EliteHomes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HousingPortfolioLanding;