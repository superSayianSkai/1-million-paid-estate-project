import React from "react";
import { Mail } from "lucide-react";

const floatingImages = [
  { src: "/images/avatar1.jpg", style: "top-5 left-5" },
  { src: "/images/avatar2.jpg", style: "top-16 left-24" },
  { src: "/images/avatar3.jpg", style: "bottom-16 left-10" },
  { src: "/images/avatar4.jpg", style: "bottom-5 left-28" },
  { src: "/images/avatar5.jpg", style: "top-5 right-5" },
  { src: "/images/avatar6.jpg", style: "top-24 right-16" },
  { src: "/images/avatar7.jpg", style: "bottom-16 right-10" },
  { src: "/images/avatar8.jpg", style: "bottom-5 right-24" },
];

const SubscribeSection: React.FC = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto my-20 px-6">
      {/* Main Card */}
      <div className="relative bg-gradient-to-r from-indigo-100 via-white to-purple-100 rounded-3xl px-8 py-16 text-center shadow-md overflow-hidden">
        {/* Floating avatars */}
        {floatingImages.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={`avatar-${index}`}
            className={`absolute w-10 h-10 rounded-full border-2 border-white object-cover shadow-md ${img.style}`}
          />
        ))}

        {/* Headline */}
        <h2 className="text-2xl md:text-3xl font-semibold text-indigo-900 mb-6 leading-snug">
          Subscribe For More Info <br />
          And Update From Hounter
        </h2>

        {/* Input + Button */}
        <form className="flex justify-center items-center gap-2 max-w-lg mx-auto bg-white p-1.5 rounded-full shadow-md">
          <div className="flex items-center pl-4">
            <Mail className="text-indigo-500 w-5 h-5" />
          </div>
          <input
            type="email"
            placeholder="Your email here"
            className="flex-1 px-3 py-2 text-sm outline-none bg-transparent"
          />
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeSection;
