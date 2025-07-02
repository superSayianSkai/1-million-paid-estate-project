import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import pic from "../assets/real-estate.png";
import hey from "../assets/hey.jpg";
import photo from "../assets/dillon.webp";
import HouseCarousel from "./HouseCarousel";
import HomeBro from "./HomeBro";
import HouseTourLanding from "./HouseTourLanding";
import HouseCarousel2 from "./HouseCarousel2";
import image from "../assets/image.avif";
import Footer from "./Footer";
const HeroLandingPage = () => {
    const [activeTab, setActiveTab] = useState("Buy");
    const [searchQuery, setSearchQuery] = useState("");
    const [showContent, setShowContent] = useState(false);
    const [isScrolled, setScrolled] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => setShowContent(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            if (scrollY > window.innerHeight) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        console.log(isScrolled);
        // Call once on mount (if you want)
        handleScroll();

        // Set up event listener
        window.addEventListener("scroll", handleScroll);

        // Clean up
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const [mobileOpen, setMobileOpen] = useState(false);


    return (
        <div className="max-w-[90rem] overflow-hidden mx-auto min-h-screen bg-gradient-to-br from-white via-slate-100 to-white">
            {/* Navigation */}
            <nav
                className={`fixed max-w-[90rem] top-6 left-0 right-0 z-50 transition-all duration-700 md:py-2 mx-auto px-4 ${isScrolled
                    ? "w-[95%] md:max-w-[800px] bg-white/30 backdrop-blur-md shadow-md rounded-full"
                    : "max-w-[90rem]"
                    } ${showContent ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
            >
                <div className=" mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 ">
                        {/* Left: Logo */}
                        <div className="flex items-center md:space-x-2">
                            <div className="rounded-full">
                                <img src={pic} className="h-10 w-10 md:w-10 md:h-10 lg:w-18 lg:h-18 object-contain" />
                            </div>
                            <span className={`text-sm font-bold text-gray-900 transition-all`}>J & J Management</span>
                        </div>


                        {/* Right: CTA button */}
                        <div className="flex items-center gap-x-14">
                            <div className="hidden md:flex items-center space-x-4 text-[.8rem] text-gray-500">
                                {["About us", "Sell", "Rent"].map((item) => (
                                    <a
                                        key={item}
                                        href="#"
                                        className={`hover:text-gray-900 font-medium transition-all duration-200 bg-white/30 backdrop-blur-md shadow-md border border-white/20 rounded-full ${isScrolled ? "" : "text-white"
                                            } px-6 py-2`}
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                            <button className="hidden md:inline cursor-pointer bg-yellow-400 text-black px-6 py-2 text-[.8rem] rounded-full hover:bg-yellow-500 transition-colors">
                                Properties
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Nav Links (Only show when open) */}

                </div>

            </nav>
            <div className={`fixed top-0 right-0 z-50 h-screen w-80 bg-black border-l border-white/10 shadow-2xl transform transition-all duration-300 ease-out ${mobileOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} overflow-hidden`}>
                {/* Background overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-gray-800/20"></div>

                {/* Content container with scroll handling */}
                <div className="relative z-10 p-8 flex flex-col h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent"
                    style={{ maxHeight: '100vh' }}>
                    {/* Header with close button */}
                    <div className="flex justify-between items-center mb-12">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-8 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full"></div>
                            <h2 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                Navigation
                            </h2>
                        </div>
                        <button
                            onClick={() => setMobileOpen(false)}
                            className="group relative p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200 hover:scale-110"
                            aria-label="Close menu"
                        >
                            <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                        </button>
                    </div>

                    {/* Navigation items */}
                    <nav className="flex flex-col gap-6 mb-auto">
                        {[
                            { name: "About us", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                            { name: "Sell", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" },
                            { name: "Rent", icon: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" }
                        ].map((item, index) => (
                            <a
                                key={item.name}
                                href="#"
                                className="group relative py-4 px-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/10"
                                style={{
                                    animationDelay: `${index * 50}ms`
                                }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-400/20 to-orange-500/20 group-hover:from-yellow-400/30 group-hover:to-orange-500/30 transition-all duration-200">
                                        <svg className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                                        </svg>
                                    </div>
                                    <span className="text-gray-300 group-hover:text-white font-medium text-lg transition-colors duration-200 flex-1">
                                        {item.name}
                                    </span>
                                    <svg className="w-5 h-5 text-gray-500 group-hover:text-yellow-400 transform group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                                {/* Hover gradient overlay */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                            </a>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="mt-8 space-y-4">
                        <button className="w-full relative group overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 hover:from-yellow-300 hover:via-yellow-400 hover:to-orange-400 text-black font-bold py-4 px-6 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/25 transform">
                            <div className="flex items-center justify-center gap-3">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                                <span className="relative z-10 text-lg">Explore Properties</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-white/30 rounded-full blur-md group-hover:animate-ping"></div>
                        </button>

                        {/* Contact info */}
                        <div className="text-center pt-4 border-t border-white/10">
                            <p className="text-gray-400 text-sm">Need help?</p>
                            <p className="text-white font-medium">Contact Support</p>
                        </div>
                    </div>
                </div>

                {/* Animated background elements */}
                <div className="absolute top-20 right-8 w-32 h-32 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-32 left-8 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>         
            
               {/* Hero Section */}
            <div className="relative">
                <div className="absolute -top-38 -left-18   h-60 md:w-[500px] md:h-[400px] rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-500 opacity-15 blur-xl "></div>

                <div className="max-w-[100%]">
                    {/* Heading */}
                    <div className="flex flex-col md:flex-row">
                        {/* Tabs */}
                        <div
                            className={`flex p-6 mt-[120px] md:p-16 gap-10 flex-col md:w-[50%] justify-center mb-2 md:mt-[70px] transform transition-transform duration-[1200ms] ease-out ${showContent ? "scale-100 opacity-100" : "scale-110 opacity-0"
                                }`}
                        >
                            <div className="">
                                <h1
                                    className={`text-[3.4rem] max-sm:leading-16 leading-13 lg:leading-16 md:text-[2.2rem] lg:text-5xl w-[100%] lg:w-[70%] text-left font-semibold text-gray-900 mb-8 transition-all duration-1000 ease-out ${showContent
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-8"
                                        }`}
                                >
                                    Find your home, live your dreams easily here
                                </h1>
                                <p className="text-gray-500 max-lg:text-[.8rem] w-[90%] -mt-[.8rem]">
                                    Everything you need about finding your place to live will be
                                    here, where it will be easier for you
                                </p>
                            </div>
                            <div
                                className={` z-20 space-y-4 w-full max-w-[100%] transition-all duration-700 ease-out delay-300 ${showContent
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10"
                                    }`}
                            >
                                <div className="flex">
                                    {["Buy", "Rent", "Sell", "Home Value"].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`px-6 py-2 lg:px-6 lg:py-3 rounded-full cursor-pointer font-medium transition-all duration-300 ease-in-out ${activeTab === tab
                                                ? "bg-black text-white text-[.6rem] lg:text-[.8rem] scale-105"
                                                : "text-gray-600 text-[.8rem] hover:text-gray-900"
                                                }`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                                <div className=" max-md:p-[.4rem] h-15 lg:p-[.2rem] mt-8 rounded-full shadow-lg bg-slate-200 overflow-hidden flex items-center">
                                    <input
                                        type="text"
                                        placeholder="Search Address, City, Postcode Agent"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="flex-1 px-4 py-1 md:px-4 md:py-3 text-gray-700 text-[.7rem] md:text-[.8rem] bg-slate-200 placeholder-gray-400 border-none outline-none"
                                    />
                                    <button className="bg-black text-[.8rem] cursor-pointer text-white px-3 py-3 lg:px-6 lg:py-4 rounded-full hover:bg-gray-800 transition-colors flex items-center space-x-2">
                                        <Search className="w-4 h-4" />
                                        <span className="max-md:text-[.6rem]">Find out</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Search Bar */}
                        {/* Container for image + search */}

                        {/* Hero Image */}
                        <div
                            className={`z-0  md:w-[50%] h-[400px] ml-6 max-md:rounded-tl-4xl max-md:rounded-bl-4xl md:h-[640px] relative md:rounded-bl-[20%] max-w-8xl md:mx-auto overflow-hidden shadow-2xl transform transition-transform duration-[1200ms] ease-out ${showContent ? "scale-100 opacity-100" : "scale-110 opacity-0"
                                }`}
                        >
                            <div className="bg-black absolute inset-0 opacity-40 z-10" />
                            <img src={photo} className="w-[100%] h-[100%] object-cover z-0" />
                            <div className="flex gap-x-2 absolute bottom-10 left-10 md:left-20">
                                <div className="bg-white gap-x-2 flex items-center justify-center z-20 w-[220px] h-[70px] rounded-3xl">
                                    <img
                                        src={image}
                                        className="w-[45px] h-[45px] rounded-full object-cover"
                                    />
                                    <div className="text-center">
                                        <p className="text-[1rem] font-bold">6 premium house</p>
                                        <p className="text-[.7rem] text-gray-500">Sold monthly</p>
                                    </div>
                                </div>
                                <div className="bg-white gap-x-2 flex items-center justify-center z-20 w-[220px] h-[70px] rounded-3xl">
                                    <img
                                        src={hey}
                                        className="w-[45px] h-[45px] rounded-full object-cover"
                                    />

                                    <div className="text-center">
                                        <p className="text-[1rem] font-bold">
                                            112 listings
                                        </p>
                                        <p className="text-[.7rem] text-gray-500">Now available</p>
                                    </div>
                                </div>
                                <div className="bg-white gap-x-2 flex items-center justify-center z-20 w-[220px] h-[70px] rounded-3xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                                        className="w-[45px] h-[45px] rounded-full object-cover"
                                    />

                                    <div className="text-center">
                                        <p className="text-[1rem] font-bold">
                                            48 agents
                                        </p>
                                        <p className="text-[.7rem] text-gray-500">
                                            Verified & active
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <HomeBro />
                    <HouseCarousel />
                    <HouseTourLanding />
                    <HouseCarousel2 />
                    <Footer />
                </div>
            </div>
        </div >
    );
};

export default HeroLandingPage;
