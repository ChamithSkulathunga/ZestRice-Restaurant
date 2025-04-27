import React from "react";
import bgImg from "../../assets/Curry/bgtest.png";
import Curry7 from "../../assets/Curry/curry9.png";
import Curry8 from "../../assets/Curry/curry8.png";
import Curry9 from "../../assets/Curry/curry5.png";
import Curry10 from "../../assets/Curry/curry10.png";

const ImageList = [
  {
    id: 1,
    img: Curry9,
  },
  {
    id: 2,
    img: Curry7,
  },
  {
    id: 3,
    img: Curry10,
  },
];

const BgImage = {
  backgroundImage: `url(${bgImg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const Hero = () => {
  const [imageId, setImageId] = React.useState(Curry9);
  return (
    <div
      style={BgImage}
      className="min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center"
    >
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* text content section */}
          <div
           data-aos="zoom-out"
           data-aos-duration="400"
           data-aos-once="true"
          className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold ">
              Welcome to Zest<span style={{color:"#FF5733"}}>Rice</span>
            </h1>
            <p className="text-sm">
            Experience the vibrant taste of ZestRice — where every grain is packed with flavor, freshness, and quality. Discover the perfect blend of tradition and innovation in every bite.
            </p>
            <div className="flex justify-center sm:justify-start gap-4">
              <button className="bg-gradient-to-r from-primary to-secondary text-white font-semibold py-2 px-4 rounded-full hover:scale-105 duration-300 flex items-center gap-3">
                Order Now
              </button>
            </div>
          </div>
          {/* Image section */}
          <div className="order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative">
            {/* Main image Section */}
            <div className="flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden">
              <img
               data-aos="zoom-out"
               data-aos-duration="400"
               data-aos-once="true"
                src={imageId}
                alt="main image"
                className="w-[300px] sm:w-[450px] mx-auto spin"
              />
            </div>
            {/*  image list Section */}
            <div
              className="
            flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full
            "
            >
              {ImageList.map((item) => (
                <img
                data-aos="zoom-out"
                data-aos-duration="400"
                data-aos-once="true"
                  key={item.id}
                  src={item.img}
                  className="max-w-[80px]
                            h-[80px] object-contain
                            inline-block
                            hover:scale-105
                            duration-200"
                  onClick={() => {
                    setImageId(
                      item.id === 1 ? Curry9 : item.id === 2 ? Curry7 : Curry10
                    );
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
