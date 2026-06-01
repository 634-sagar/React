import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaSquareInstagram,
  FaSquareTwitter,
} from "react-icons/fa6";
import { Logo } from "../../image";

const Footer = () => {
  
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      icon: FaSquareInstagram,
      href: "https://instagram.com",
    },
    {
      icon: FaFacebook,
      href: "https://facebook.com",
    },
    {
      icon: FaSquareTwitter,
      href: "https://twitter.com",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com",
    },
  ];

  return (
   <footer className="bg-[#0b1325] text-gray-400 py-12 px-4 sm:px-6  md:px-10  lg:px-16 border-t border-gray-800">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

    <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-5">
      <div className="flex items-center space-x-2">
            <div className="relative w-18 h-18 flex items-center justify-center ">
              
            <img src={Logo} alt="" />
           
            </div>
          </div>

          <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
            Your one-stop destination for trendy fashion. Quality meets style.
          </p>

          <div className="flex space-x-3 pt-2">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;

              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-[#172237] hover:bg-sky-500 hover:text-white rounded-lg transition-colors duration-300 group"
                >
                  <Icon
                    size={18}
                    className="text-gray-400 group-hover:text-white transition-colors"
                  />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-5">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            {["Home", "About", "Collection", "Contact", "Login"].map(
              (link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-sky-400 transition-colors duration-200 block"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-5">
            Categories
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              "Men's Fashion",
              "Women's Fashion",
              "Kids Wear",
              "Accessories",
              "New Arrivals",
            ].map((category) => (
              <li key={category}>
                <a
                  href="#"
                  className="hover:text-sky-400 transition-colors duration-200 block"
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-5">
            Contact Info
          </h3>
          <ul className="space-y-3 text-sm">
            <li>Kathmandu, Nepal</li>
            <li>+977-5615466</li>
            <li>
              <a
                href="mailto:shop@fashionstore.com"
                className="hover:text-sky-400 transition-colors duration-200">shop@fashionstore.com</a>
            </li>
            <li>Sun-Fri: 10AM - 8PM</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
        <p>&copy; {currentYear} Fashion Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;