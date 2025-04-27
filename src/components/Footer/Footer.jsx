import React from "react";
import logo from "../../assets/logo4t.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div id="contact" className="bg-gray-100 dark:bg-gray-950 dark:text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 py-5">
            <div className="py-8 px-4">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                <img src={logo} alt="" className="max-w-[50px] " />
                ZestRice
              </h1>
              <p>
                At ZestRice, we offer a unique blend of traditional and modern
                flavors, bringing you the finest dishes made with fresh
                ingredients. Whether you're craving a hearty curry, flavorful
                biryani, or a tasty pizza, we have something for every food
                lover. Our commitment to quality and customer satisfaction makes
                us the perfect spot for a delightful meal!
              </p>
              <br />
              <div className="flex items-center gap-3 mt-6">
                <FaLocationArrow />
                <p>123 High Street, London, UK, E1 6AN </p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+44 20 7946 0958</p>
              </div>
              {/* Social handles */}
              <div>
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl  font-bold text-justify sm:text-left mb-3">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li className="hover:text-primary cursor-pointer" >Home</li>
                    <li className="hover:text-primary cursor-pointer" >About</li>
                    <li className="hover:text-primary cursor-pointer" >Services</li>
                    <li className="hover:text-primary cursor-pointer" >Contact</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl  font-bold text-justify sm:text-left mb-3">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li className="hover:text-primary cursor-pointer" >Galary</li>
                    <li className="hover:text-primary cursor-pointer" >Order Online</li>
                    <li className="hover:text-primary cursor-pointer" >Blog</li>
                    <li className="hover:text-primary cursor-pointer" >Careers</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl  font-bold text-justify sm:text-left mb-3 ">
                  Hours of Operation
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li>Mon-Fri: 11:00 AM - 10:00 PM</li>
                    <li>Sat-Sun: 12:00 PM - 11:00 PM</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
          © Copyright 2025 ZestRice. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
