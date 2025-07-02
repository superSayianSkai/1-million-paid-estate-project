import pic from "../assets/real-estate.png";
import { useState, useEffect } from "react";
const Nav = () => {
    const [isScrolled, setScrolled] = useState(false)
    const [showContent, setShowContent] = useState(false);


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
   

        // Set up event listener
        window.addEventListener("scroll", handleScroll);

        // Clean up
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-6 left-0 right-0 z-50 transition-all duration-700 py-2 
    mx-auto px-4
    ${isScrolled
                    ? "max-w-[800px] bg-white/30 backdrop-blur-md shadow-md rounded-full"
                    : "max-w-full"
                }
    ${showContent ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
  `}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2 ">
                        <div className="bg-yellow-400 rounded-full ">
                            <img src={pic} className="w-8 h-8 object-contain" />
                        </div>
                        <span className="text-sm font-bold text-gray-900">
                            J & J Management
                        </span>
                    </div>
                    <div className="flex gap-8">
                        <div className="hidden md:flex items-center space-x-4 text-[.8rem] text-gray-500">
                            {["About us", "Sell", "Rent"].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className={`hover:text-gray-900 text-[.8rem] font-medium transition-all duration-200  bg-white/30 backdrop-blur-md shadow-md border border-white/20 rounded-full ${isScrolled ? "" : "text-white"} px-8 py-2`}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                        <button className="cursor-pointer bg-yellow-400 text-black px-6 py-1 text-[.8rem] rounded-full hover:bg-yellow-500 transition-colors">
                            Properties
                        </button>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Nav