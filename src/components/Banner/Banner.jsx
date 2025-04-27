import React from "react";
import img2 from "../../assets/Curry/curry1.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <>
      <div id="about" className="min-h-[480px] pt-8 bg-white dark:bg-gray-900 duration-200">
        <div>
          <div
            data-aos="slide-up"
            data-aos-duration="300"
            className="container"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* image section */}
              <div>
                <img
                  src={img2}
                  alt=""
                  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.1)]"
                />
              </div>
              {/* text-content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                  About ZestRice
                </h1>
                <p className="text-sm text-gray-500 tracking-wide leading-5">
                  At ZestRice 🍽️, we take immense pride in offering an
                  unforgettable dining experience filled with rich flavors and
                  heartwarming dishes. Our restaurant is best known for its
                  signature Chicken Curry 🌟, slow-cooked to perfection with a
                  blend of traditional spices 🌶️, tender chicken 🐓, and a
                  creamy, flavorful sauce 🥣.
                  <br />
                  <br />
                  We believe food is more than just a meal — it's a celebration
                  of taste, culture, and community. Whether you're joining us
                  for a casual lunch, a family dinner, or a special occasion,
                  our cozy atmosphere and delicious offerings will make you feel
                  right at home. Paired with soft naan or fragrant rice, our
                  dishes promise a comforting and authentic taste that keeps
                  guests coming back again and again! ❤️
                </p>
                <div className="flex gap-6">
                  <div>
                    <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                  </div>
                  <div>
                    <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                  </div>
                  <div>
                    <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                  </div>
                </div>
                <div>
                  <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:scale-105 duration-200">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
