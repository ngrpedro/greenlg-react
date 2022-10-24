import React from "react";
import logo from '../assets/icon.png';

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="section-container flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img
            src={logo}
            className="mr-3 h-6 sm:h-9"
            alt="GreenOne"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            GreenOne
          </span>
        </a>

        <label className="text-sm text-gray-500">
          @ 2022 |<a href="https://github.com/ngrpedro"> Pedro Nogueira </a>
        </label>
      </div>
    </footer>
  );
};

export default Footer;
