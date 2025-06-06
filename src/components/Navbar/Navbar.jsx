import React from "react";
import Logo from "../../assets/logo4t.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-2 mx-auto">
          <div className="flex justify-between items-center py-0">
            <div>
              <a
                href="#"
                className="flex items-center gap-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white"
              >
                <img src={Logo} alt="ZestRice Logo" className="w-10" />
                ZestRice
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <DarkMode />
              </div>
              <ul className="hidden sm:flex gap-4">
                <li>
                  <a
                    href="#"
                    className="inline-block py-4 px-4 hover:text-primary"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="inline-block py-4 px-4 hover:text-primary"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="inline-block py-4 px-4 hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <button className="bg-gradient-to-r from-primary to-secondary text-white font-semibold py-1 px-4 rounded-full hover:scale-105 duration-300 flex items-center gap-3">
                Order
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
