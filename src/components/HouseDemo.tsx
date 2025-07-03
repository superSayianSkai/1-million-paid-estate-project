import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Share2, MapPin, Bed, Bath, Square, ArrowLeft, ArrowRight, Wifi, TreePine, Waves, Coffee, Sparkles } from 'lucide-react';
import google from "../assets/staticmap.png"
import Footer from './Footer';
const HouseDemo: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = scrollRef.current
        if (!el) return

        const scrollLoop = () => {
            if (el.scrollTop >= el.scrollHeight / 2) {
                el.scrollTop = 0 // jump to top
            }
        }

        el.addEventListener('scroll', scrollLoop)
        return () => el.removeEventListener('scroll', scrollLoop)
    }, [])

    const images = [
        'https://photos.zillowstatic.com/fp/dd0b2b54ea80dfc3e7a863b43d72180c-cc_ft_960.webp',
        'https://photos.zillowstatic.com/fp/adbddf1818c61d65ccc254b89559b6ee-cc_ft_768.webp',
        'https://photos.zillowstatic.com/fp/e79597c88c84baf28d936f243746b557-cc_ft_768.webp',
        'https://photos.zillowstatic.com/fp/816f6b9b8ac571dc6bd6204764c9742f-cc_ft_768.webp'
    ];

    const features = [
        { icon: <Waves className="w-5 h-5" />, text: 'Saltwater Pool' },
        { icon: <TreePine className="w-5 h-5" />, text: 'Bamboo Fencing' },
        { icon: <Coffee className="w-5 h-5" />, text: 'Guest Suite' },
        { icon: <Bed className="w-5 h-5" />, text: 'Spacious Bedrooms' },
        { icon: <Sparkles className="w-5 h-5" />, text: 'Quartz Countertops' },
        { icon: <Wifi className="w-5 h-5" />, text: 'Built-in Office' }
    ];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="min-h-screen max-w-[90rem]  mx-auto bg-gradient-to-br from-white via-slate-100 to-white">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-4">
                            <NavLink to="/" className="text-gray-600 cursor-pointer hover:text-gray-900 transition-colors">
                                Back
                            </NavLink>
                        </div>
                        <div className="text-[1.2rem] md:text-2xl font-bold text-yellow-400">J&J Management </div>
                        <div className="flex items-center space-x-4">

                            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                                <Share2 className="w-4 h-4 sm:w-6 sm:h-6 cursor-pointer hover:text-gray-500 " />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Image Gallery */}
                    <div className="lg:col-span-2 px-2">
                        <div className="relative  bg-gray-900 rounded-xl overflow-hidden group">
                            <img
                                src={images[currentImageIndex]}
                                alt="House exterior"
                                className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0  bg-opacity-20"></div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-opacity-30 transition-all"
                            >
                                <ArrowLeft className='text-black hover:opacity-45 cursor-pointer' />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 transform bg-white -translate-y-1/2  bg-opacity-20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-opacity-30 transition-all"
                            >
                                <ArrowRight className='text-black cursor-pointer hover:opacity-45' />
                            </button>

                            {/* Image Counter */}
                            <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                                {currentImageIndex + 1} / {images.length}
                            </div>

                            {/* For Sale Badge */}
                            <div className="absolute top-4 left-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                                For Sale
                            </div>
                        </div>

                        {/* Image Thumbnails */}
                        <div className="flex space-x-2 mt-4 overflow-x-auto">
                            {images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`flex-shrink-0 w-20 h-16 rounded-lg cursor-pointer overflow-hidden border-2 transition-all ${currentImageIndex === index ? 'border-yellow-500' : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Property Details */}
                    <div className=" space-y-6 px-4">
                        {/* Price and Basic Info */}
                        <div className="md:bg-white rounded-xl max-md:pt-8 md:p-6 md:shadow-lg">
                            <div className="text-3xl font-bold text-gray-900 mb-2">$ 35,000,000</div>
                            <div className="text-gray-600 mb-4">Roselands House</div>

                            <div className="flex text-[.8rem] md:text-sm items-center space-x-6 mb-6">
                                <div className="flex items-center space-x-2">
                                    <Bed className="w-5 h-5 text-gray-500" />
                                    <span className="font-semibold">3</span>
                                    <span className="text-gray-500">beds</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Bath className="w-5 h-5 text-gray-500" />
                                    <span className="font-semibold">2</span>
                                    <span className="text-gray-500">baths</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Square className="w-5 h-5 text-gray-500" />
                                    <span className="font-semibold">2,570</span>
                                    <span className="text-gray-500">sqft</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <button className="w-full bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-yellow-400 transition-colors cursor-pointer">
                                    Request a tour
                                    <div className="text-sm opacity-90">we will follow up at 11:00 am tomorrow</div>
                                </button>
                                <button className="w-full border border-yellow-400 hover:border-black text-black-600 py-3 px-4 rounded-lg font-medium hover:bg-gray-100 hover:text-black cursor-pointer transition-colors">
                                    Contact agent
                                </button>
                            </div>
                        </div>

                        {/* Property Stats */}
                        <div className="md:bg-white rounded-xl max-sm:pt-8 md:p-6 md:shadow-lg">
                            <h3 className="text-lg font-semibold mb-4">Property Details</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Property Type:</span>
                                    <span className="font-medium">Duplex, Multi Family</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Built in:</span>
                                    <span className="font-medium">1953</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Price per sqft:</span>
                                    <span className="font-medium">$933/sqft</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">HOA:</span>
                                    <span className="font-medium">$-- HOA</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Lot size:</span>
                                    <span className="font-medium">-- sqft lot</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="px-4 mt-12 md:p-8">
                    <h2 className="text-2xl font-bold mb-6">What's Special</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col items-center p-4  rounded-lg transition-colors">
                                <div className="text-black mb-2">{feature.icon}</div>
                                <span className="text-sm text-center font-medium">{feature.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Description */}
                <div className="mt-8 md:p-8 px-4">
                    <h2 className="text-2xl font-bold mb-4">About This Home</h2>
                    <p className="text-gray-700 leading-relaxed">
                        This mid-town multi-family home offers a remarkable living experience. Designed for comfort and privacy,
                        it features 2 distinct apartments, each with its own charm & functionality & it can become a 30 day vacation
                        rental with appropriate licensing. Downstairs: 2 spacious bedrooms & 2 well-appointed bathrooms. The
                        Master has a walk-in closet system, a built-in office; the large Master bath a spacious shower. Open concept
                        kitchen, living & dining areas create a seamless flow perfect for entertaining & daily living.
                    </p>
                </div>

                {/* Map Section */}
                <div className="mt-8 md:p-8 px-4">
                    <h2 className="text-2xl font-bold mb-4">Location</h2>
                    <div className="flex items-center space-x-2 mb-4">
                        <MapPin className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-700">1609 United St, Key West, FL 33040</span>
                    </div>
                    <div className='bg-white rounded-xl p-4 shadow-lg'>
                        <img
                            src={google}
                            alt="Map location"
                            className="w-[100%] object-cover  rounded-lg"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HouseDemo
