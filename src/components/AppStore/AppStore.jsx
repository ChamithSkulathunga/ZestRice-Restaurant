import React from "react";
import AppStoreImg from "../../assets/icons/app_store.png";
import PlayStoreImg from "../../assets/icons/play_store.png";
import GitImg from "../../assets/icons/mobile_bike.gif";

const AppStore = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 py-14">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
            <div
              data-aos="fade-up"
              data-aos-duration="300"

              className="space-y-6 max-w-xl mx-auto"
            >
              <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold dark:text-gray-400 text-gray-700">
                ZestRice is Available for Android and IOS
              </h1>
              <div className="flex flex-wrap justify-center sm:justify-start items-center">
                <a href="#">
                  <img
                    src={PlayStoreImg}
                    alt="playstory"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
                <a href="#">
                  <img
                    src={AppStoreImg}
                    alt="AppStore"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
              </div>
            </div>

            <div data-aos="zoom-in" data-aos-duration="300">
              <img
                src={GitImg}
                alt="gifimg"
                className="max-w-[300px] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
