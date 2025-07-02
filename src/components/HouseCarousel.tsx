import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Home, Building, MapPin } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface Agent {
    name: string;
    avatar: string;
    location: string;
}

interface Property {
    id: number;
    to: string;
    title: string;
    price: string;
    image: string;
    agent: Agent;
    tag: {
        text: string;
        type: 'popular' | 'new' | 'deal';
    };
}

const HouseCarousel: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'house' | 'villa' | 'apartment'>('house');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(3);

    useEffect(() => {
        const updateCardsPerView = () => {
            const width = window.innerWidth;
            if (width < 640) setCardsPerView(1); // mobile
            else if (width < 1024) setCardsPerView(2); // tablet
            else setCardsPerView(3); // desktop
        };

        updateCardsPerView();
        window.addEventListener('resize', updateCardsPerView);
        return () => window.removeEventListener('resize', updateCardsPerView);
    }, []);

    const properties: Property[] = [
        {
            id: 1,
            to: "/demo",
            title: 'Roselands House',
            price: '$ 35,000,000',
            image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
            agent: {
                name: 'Dianne Russell',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
                location: 'Manchester, Kentucky',
            },
            tag: {
                text: 'Popular',
                type: 'popular',
            },
        },
        {
            id: 2,
            to: "/demo",
            title: 'Woodlandside',
            price: '$ 20,000,000',
            image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop',
            agent: {
                name: 'Robert Fox',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
                location: 'St. San Jose, South Dakota',
            },
            tag: {
                text: 'New House',
                type: 'new',
            },
        },
        {
            id: 3,
            to: "/demo",
            title: 'The Old Lighthouse',
            price: '$ 44,000,000',
            image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
            agent: {
                name: 'Ronald Richards',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
                location: 'Santa Ana, Illinois',
            },
            tag: {
                text: 'Best Deals',
                type: 'deal',
            },
        },
        {
            id: 4,
            to: "/demo",
            title: "Cosmo's House",
            price: '$ 22,000,000',
            image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=300&fit=crop',
            agent: {
                name: 'Jenny Wilson',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
                location: 'Preston Rd. Inglewood',
            },
            tag: {
                text: 'Popular',
                type: 'popular',
            },
        },
    ];

    const maxIndex = Math.max(0, properties.length - cardsPerView);

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };


    const getTabIcon = (tab: string) => {
        switch (tab) {
            case 'house':
                return <Home className="w-4 h-4" />;
            case 'villa':
            case 'apartment':
                return <Building className="w-4 h-4" />;
            default:
                return <Home className="w-4 h-4" />;
        }
    };

    return (
        <div className="max-w-6xl max-md:p-6 mx-auto">
            {/* Header */}
            <div className="flex relative max-md:mb-2">
                <div className="border-t-[1px] w-[2.3%] absolute border-yellow-400 -left-[30px] top-2"></div>
                <h1 className="text-yellow-400 text-sm capitalise tracking-wide">Our Recommendation</h1>
            </div>

            {/* Title and Tabs */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-3 md:gap-2 ">
                <h2 className="text-4xl md:text-[1.5rem] font-bold text-gray-900 max-md:mb-1">Featured House</h2>

                <div className="flex items-center space-x-4 rounded-lg mb-2 md:mb-2 md:space-x-8">
                    {['house', 'villa', 'apartment'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as 'house' | 'villa' | 'apartment')}
                            className={`flex items-center space-x-2 cursor-pointer border-gray-400 text-[.5rem] md:text-[.7rem] px-6     py-3 rounded-full font-medium transition-colors ${activeTab === tab ? 'bg-yellow-400 text-white border-0' : 'text-gray-600 hover:text-gray-900 border-[1px]'
                                }`}
                        >
                            {getTabIcon(tab)}
                            <span className="capitalize">{tab}</span>
                        </button>
                    ))}
                </div>

                <div className="flex max-md:hidden items-center space-x-2">
                    <button
                        onClick={prevSlide}
                        className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-2 rounded-full bg-yellow-500 text-white hover:bg-yellow-500 transition-colors"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Property Cards */}
            <div className="relative">
                <div
                    className="flex max-md:overflow-x-scroll -mx-10 max-md:px-10 max-md:pb-8 overflow transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${(currentIndex * (100 / cardsPerView))}%)` }}
                >
                    {properties.map((property) => (
                        <NavLink
                            to={property.to}
                            key={property.id}
                            className={`flex-shrink-0 pr-7 ${cardsPerView === 1 ? 'w-full' : cardsPerView === 2 ? 'w-1/2' : 'w-1/3'
                                }`}
                        >
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={property.image}
                                        alt={property.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />


                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                                    <p className="text-2xl font-bold text-gray-900 mb-4">{property.price}</p>
                                    <div className="flex items-center space-x-3">
                                        <img
                                            src={property.agent.avatar}
                                            alt={property.agent.name}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="font-medium text-gray-900">{property.agent.name}</p>
                                            <div className="flex items-center space-x-1 text-sm text-gray-500">
                                                <MapPin className="w-3 h-3" />
                                                <span>{property.agent.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>

            {/* Dots */}
            <div className="flex max-md:hidden justify-center space-x-2 mt-8">
                {Array.from({ length: maxIndex + 1 }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${i === currentIndex ? 'bg-yellow-500 w-6' : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HouseCarousel;
