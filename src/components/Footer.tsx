import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <>
      <style>
        {`
          @keyframes gradientSlide {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <footer className="py-16 px-6 mt-20 bg-[linear-gradient(270deg,_#fde047,_#fff9db,_#fde047)] bg-[length:200%_200%] animate-[gradientSlide_6s_ease_infinite] text-gray-800">
        <div className="max-w-6xl mx-auto justify-between">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <h2 className="text-xl font-bold">J & J Management</h2>
              </div>
              <p className="text-sm mb-6 leading-relaxed text-gray-700">
                We provide information about properties such as houses, villas and apartments to help people find their dream home
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors" rel="noopener noreferrer">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors" rel="noopener noreferrer">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors" rel="noopener noreferrer">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Property Links */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Property</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                    House
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                    Apartment
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                    Villa
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
                <p>(671) 555-0110</p>
                <p>info@hounter.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
