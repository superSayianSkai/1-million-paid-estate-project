import star from "../assets/star.png";
import { useInView } from "../hook/useHook";

const HomeBro = () => {
  const { ref, isInView } = useInView(0.3);

  return (
    <div
      ref={ref}
      className={`relative max-md:mt-[60px] flex flex-col items-center justify-center text-center px-4 py-20 md:py-32 transition-all duration-700 
      ${isInView ? "animate-[slide-up_0.8s_ease-out_forwards]" : "opacity-0 translate-y-10"}`}
    >
      <div className="absolute top-12 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 opacity-20 blur-2xl -z-10"></div>

      <img
        src={star}
        alt="Gradient Symbol"
        className={`w-24 md:w-32 mb-6 transition-all duration-500 
        ${isInView ? "animate-[fade-in_1s_ease-in_forwards]" : "opacity-0 scale-90"}`}
        loading="lazy"
      />

      <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
        Home<br />is everything
      </h2>

      <div className="w-[80%] md:w-[20%] mx-auto">
        <p className="text-[.9rem] text-gray-600">
          Without it, even the richest person is just stylishly homeless
        </p>
      </div>
    </div>
  );
};

export default HomeBro;
