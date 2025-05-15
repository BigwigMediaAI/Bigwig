import { useState } from "react";
import ham from "../assets/nav.png";
import bulb from "../assets/home-icon-1.gif";
import logo from "../assets/homepage-mobile.gif";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import indiaFlag from "../assets/Flag_of_India.svg";
import uaeFlag from "../assets/istockphoto-482478655-612x612.jpg";
import nzFlag from "../assets/Flag_of_New_Zealand.svg.png";
import ausFlag from "../assets/360_F_95875376_J2JaVltiGAINhhRDWInNcncgmLbPSvBc.jpg";

function Landing2() {
  const [showMenu, setShowMenu] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="flex flex-col justify-between w-full h-screen bg-[#FF3D48] relative text-white overflow-hidden">
      {/* Top Bar */}
      <div className="flex justify-between w-full px-4 pt-6 absolute top-0 z-10">
        <img
          src={ham}
          alt="Menu"
          className="w-10 h-10 cursor-pointer bg-white rounded-full"
          onClick={() => setShowMenu(!showMenu)}
        />
        <img src={bulb} alt="Bulb" className="w-1/2 -mt-4 -mr-10" />
      </div>

      {/* Center Logo */}
      <div className="flex-1 flex items-center justify-center px-6 pt-16">
        <img
          src={logo}
          alt="Logo"
          className="w-full max-h-full object-contain"
        />
        {/* Centered Office Names */}
        <div className="w-full absolute bottom-44 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm  font-semibold tracking-widest z-10 text-center flex flex-wrap justify-center items-center gap-6">
          <div className="flex items-center space-x-2">
            <img src={indiaFlag} alt="India" className="w-6 h-6" />
            <span>INDIA |</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src={uaeFlag} alt="Dubai" className="w-6 h-6" />
            <span>DUBAI |</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src={nzFlag} alt="New Zealand" className="w-6 h-6" />
            <span>NEW ZEALAND |</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src={ausFlag} alt="Australia" className="w-6 h-6" />
            <span>AUSTRALIA</span>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      {showMenu && (
        <div className="absolute top-20 left-4 right-4 text-white rounded p-4 z-20 bg-[#FF3D48]">
          <ul className="space-y-2 text-lg">
            <li>
              <Link to="/Agency">Agency</Link>
            </li>
            <div>
              <div
                onClick={() => setShowServices(!showServices)}
                className="flex items-center cursor-pointer hover:text-gray-300 transition space-x-2"
              >
                <span className="font-thin text-white">Services</span>

                <ChevronDown className="w-4 h-4 text-white transition-transform duration-200" />
              </div>

              {showServices && (
                <div className="ml-4 mt-2 space-y-2 text-[16px]">
                  <a
                    href="https://www.bigwigdigital.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    Digital Marketing
                  </a>
                  <a
                    href="https://bigwig-events-planning.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    Events
                  </a>
                </div>
              )}
            </div>
            <div>
              <div
                onClick={() => setShowProducts(!showProducts)}
                className="flex items-center cursor-pointer hover:text-gray-300 transition space-x-2"
              >
                <span className="font-thin text-white">AI Products</span>

                <ChevronDown className="w-4 h-4 text-white transition-transform duration-200" />
              </div>

              {showProducts && (
                <div className="ml-4 mt-2 space-y-2 text-[16px]">
                  <a
                    href="https://bigwigmedia.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    Free AI Tools
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    Social Media Management
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    Review Mangement
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    LMS For Education
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    LMS For Real Estate
                  </a>
                </div>
              )}
            </div>
            <li>
              <Link to="/clients">Clients</Link>
            </li>
            <li>
              <Link to="/strategy">Strategy</Link>
            </li>
            <li>
              <Link to="/Y-Bigwig">Y Bigwig</Link>
            </li>
            <li>
              <Link to="/things-we-do">Things We Do</Link>
            </li>
            <li>
              <Link to="/method-to-madness">Method to Madness</Link>
            </li>
          </ul>
        </div>
      )}

      {/* Bottom Buttons */}
      <div className="w-full absolute bottom-0 left-0 flex">
        <a
          href="tel:+918368573451"
          className="w-1/2 py-3 bg-black text-white text-center border-r"
        >
          Call Me
        </a>
        <Link
          to="/contact"
          className="w-1/2 py-3 bg-black text-white text-center"
        >
          I'm Interested
        </Link>
      </div>
    </div>
  );
}

export default Landing2;
