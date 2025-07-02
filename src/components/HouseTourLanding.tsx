import React from 'react';
import { Bed, Bath, Car, Building } from 'lucide-react';

interface HouseDetailProps {
  icon: React.ReactNode;
  value: string;
}

const HouseDetail: React.FC<HouseDetailProps> = ({ icon, value }) => (
  <div className="flex items-center gap-2 text-gray-600">
    <div className="w-5 h-5 text-gray-500">
      {icon}
    </div>
    <span className="text-sm font-medium">{value}</span>
  </div>
);

const HouseTourLanding: React.FC = () => {
  return (

    <div className="max-w-6xl relative mx-auto px-6 md:p-4 mt-[100px]">
      {/* Header */}
      <div className="absolute -top-38 -right-18   h-60 md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-tr from-blue-400 to-orange-500 opacity-20 blur-2xl "></div>

      {/* Main Content */}

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - House Details */}
        <div className="space-y-8">
          <div>
            <div className="mb-8">
              <div className='flex relative'>
                <div className='border-t-[1px] w-[5%] absolute border-yellow-400 -left-[35px] top-2'></div>
                <h1 className="text-yellow-400 text-sm font-semibold capitalise tracking-wide mb-2">
                  Ready To Sell!
                </h1>
              </div>
              <h2 className="text-4xl md:text-[2rem] font-medium text-gray-800 mb-4">
                Let's Tour And See Our House!
              </h2>
              <p className="text-gray-500 text-[.8rem] max-w-md">
                Houses recommended by our partners that have been curated to become the home of your dreams!
              </p>
            </div>
            <h3 className="text-xl font-semibold text-gray-500 mb-6">House Detail</h3>

            <div className="grid grid-cols-2 gap-4">
              <HouseDetail
                icon={<Bed className="w-5 h-5" />}
                value="3 Bedrooms"
              />
              <HouseDetail
                icon={<Bath className="w-5 h-5" />}
                value="2 Bathrooms"
              />
              <HouseDetail
                icon={<Car className="w-5 h-5" />}
                value="1 Carport"
              />
              <HouseDetail
                icon={<Building className="w-5 h-5" />}
                value="2 Floors"
              />
            </div>
          </div>
          <div className="border-t-[1px] border-gray-200 w-[80%]"></div>
          <div className="rounded-2xl max-w-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" className='h-[100%] w-[100%] rounded-full object-contain' />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 max-md:text-sm">Dianne Russell</h4>
                  <p className="text-sm text-gray-500 max-md:text-sm">Manager Director</p>
                </div>
              </div>
              <button className="text-[.6rem] md:text-[.8rem] cursor-pointer bg-yellow-500 hover:bg-yellow-400 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 flex items-center gap-2">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                </div>
                Contact Now
              </button>
            </div>
          </div>
          {/* Contact Section */}
        </div>

        {/* Right Side - Images */}
        <div className="space-y-4">
          {/* Main House Image */}
          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&h=400&fit=crop&crop=center"
              alt="Beautiful two-story house with wrap-around porch"
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Bottom Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop&crop=center"
              alt="Modern green sofa in living room"
              className="w-full h-42 object-cover rounded-xl shadow-md -mt-20 max-md:-ml-3 md:-ml-10 z-2"
            />
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=300&h=200&fit=crop&crop=center"
              alt="Bright modern kitchen interior"
              className="w-full h-32 object-cover rounded-xl shadow-md -mt-20 md:-ml-10 z-2"
            />
          </div>
        </div>
      </div>
    </div>

  );
};

export default HouseTourLanding;