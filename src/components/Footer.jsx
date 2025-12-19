import React, { useState } from "react";
import { Mail, Globe, X } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { LuFacebook, LuLinkedin, LuInstagram } from "react-icons/lu";
import chairmanProfile from '../assets/images/chairman.PNG'

const ChairmanModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-6 right-6 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-all duration-300 z-10 shadow-lg"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          <ChairmanLeftSection />
          <ChairmanRightSection />
        </div>
      </div>
    </div>
  );
};

const ChairmanLeftSection = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center justify-center p-6 md:p-8">
      <ChairmanPhotoBox />
      <ChairmanInfo />
      <ChairmanTagline />
    </div>
  );
};

const ChairmanPhotoBox = () => {
  return (
    <div className="mb-8">
      <div className="w-32 h-40 md:w-36 md:h-52 bg-gray-400 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
        <img className=' h-full w-full' src={chairmanProfile} alt="Chairman Photo" />
      </div>
    </div>
  );
};

const ChairmanInfo = () => {
  return (
    <div className="text-center">
      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">
        Syed Mehboob Hussain Shah
      </h3>
      <p className="text-blue-600 font-semibold text-sm md:text-base mb-2">Chairman</p>
      <p className="text-gray-700 font-medium text-sm md:text-base">
        Murad Group of Companies
      </p>
    </div>
  );
};

const ChairmanTagline = () => {
  return (
    <div className="mt-8 w-full border-t border-gray-300 pt-6">
      <p className="text-gray-600 text-xs md:text-sm italic">
        Excellence is our passion
      </p>
    </div>
  );
};

const ChairmanRightSection = () => {
  return (
    <div className="md:col-span-2 p-6 md:p-10 flex flex-col justify-start">
      <ChairmanStatementTitle />
      <ChairmanStatementContent />
      <DecorativeElements />
    </div>
  );
};

const ChairmanStatementTitle = () => {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6 md:mb-8">
      Chairman's Statement
    </h2>
  );
};

const ChairmanStatementContent = () => {
  return (
    <div className="space-y-5 md:space-y-6 text-gray-800 text-sm md:text-base leading-relaxed">
      <p>
        A culture with strong ethics means we are honest, we operate with integrity and we are transparent in our decisions and actions. Ethics help foster a safe and engaging workplace that positively influences our relationships with each other, our customers, suppliers, shareowners and the communities where we live and work.
      </p>

      <p>
        We all share responsibility for operating with ethics and integrity, embracing both the spirit and letter of the law. Our individual actions, positive or negative, determine our company culture and reputation.
      </p>

      <p>
        That's why it is important to understand the right things to do, recognize the situations that could cause concern and <span className="font-bold text-red-600">Speak Up!</span> as soon as we suspect wrongdoing. Our Code of Conduct provides guidance and direction — it's up to us to make it part of the way we conduct ourselves every day.
      </p>
    </div>
  );
};

const DecorativeElements = () => {
  return (
    <div className="mt-8 md:mt-10 flex gap-2">
      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
    </div>
  );
};

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-white mb-4 cursor-default bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">
                Murad Group
              </h2>
              <p className="text-sm leading-relaxed cursor-default mb-6 text-gray-400">
                Building excellence through innovation and integrity.
                We deliver world-class solutions across multiple industries,
                driving growth and creating lasting value.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:Info@muradgoc.com"
                  className="flex items-center text-sm text-gray-400 hover:text-blue-400 transition-all duration-200 group"
                >
                  <Mail className="w-4 h-4 mr-3 text-blue-400 group-hover:scale-110 transition-transform" />
                  Info@muradgoc.com
                </a>
                <a
                  href="http://www.muradgoc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-gray-400 hover:text-blue-400 transition-all duration-200 group"
                >
                  <Globe className="w-4 h-4 mr-3 text-blue-400 group-hover:scale-110 transition-transform" />
                  www.muradgoc.com
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 cursor-default relative inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-400"></span>
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#about" className="hover:text-blue-400 transition-all duration-200 inline-block">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-blue-400 transition-all duration-200 inline-block">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-blue-400 transition-all duration-200 inline-block">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-400 transition-all duration-200 inline-block">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#careers" className="hover:text-blue-400 transition-all duration-200 inline-block">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 cursor-default relative inline-block">
                Our Companies
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-400"></span>
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-all duration-200 inline-block">
                    Construction
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-all duration-200 inline-block">
                    Real Estate
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-all duration-200 inline-block">
                    Manufacturing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-all duration-200 inline-block">
                    Trading
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-all duration-200 inline-block">
                    Technology
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 cursor-default relative inline-block">
                Connect With Us
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-400"></span>
              </h3>
              <p className="text-sm text-gray-400 mb-6 cursor-default">
                Stay updated with our latest news and opportunities
              </p>
              <div className="flex space-x-4 mb-6">
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-lg transition-all duration-300 group"
                  aria-label="Facebook"
                >
                  <LuFacebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-lg transition-all duration-300 group"
                  aria-label="Twitter"
                >
                  <FaXTwitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-lg transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <LuLinkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-lg transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <LuInstagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              </div>
              <button
                onClick={handleOpenModal}
                className="w-full px-4 py-3 bg-blue-500  text-white font-bold text-sm rounded-lg hover:from-blue-600 hover:via-blue-700 hover:to-red-600 transition-all duration-300 shadow-lg relative overflow-hidden group cursor-pointer"
              >
                <span className="relative z-10">Chairman's Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform translate-x-full group-hover:translate-x-0 transition-all duration-500"></div>
              </button>
            </div>
          </div>
          <div className="border-t border-gray-700 my-8"></div>
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-4 md:space-y-0">
            <p className="cursor-default">
              © {new Date().getFullYear()} Murad Group of Companies. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 justify-center md:justify-end items-center">
              <a href="#privacy" className="hover:text-blue-400 transition-all duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-blue-400 transition-all duration-200">
                Terms of Service
              </a>
              <a href="#sitemap" className="hover:text-blue-400 transition-all duration-200">
                Sitemap
              </a>

            </div>
          </div>
        </div>
      </footer>
      <ChairmanModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Footer;