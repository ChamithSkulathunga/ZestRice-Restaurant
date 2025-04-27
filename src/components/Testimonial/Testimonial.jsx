import React from "react";
import Slider from "react-slick";
import user1 from "../../assets/users/user1.jpg";
import user2 from "../../assets/users/user2.jpg";
import user3 from "../../assets/users/user3.jpg";
import user4 from "../../assets/users/user4.jpg";
const testimonialData = [
  {
    name: "Samuel",
    text: "The food here is absolutely amazing! The flavors are rich and authentic, and every dish feels like it’s made with love. I always look forward to my next visit.",
    img: user1,
  },
  {
    name: "John Doe",
    text: "A wonderful dining experience! The service is top-notch, and the Chicken Curry is one of the best I’ve ever tasted. Highly recommend this place to anyone who loves great food!",
    img: user2,
  },
  {
    name: "Smith",
    text: "I had the best sushi rolls here! Fresh ingredients and a perfect balance of flavors. The atmosphere is cozy and the staff is so welcoming. Will definitely be coming back soon.",
    img: user3,
  },
  {
    name: "Klason",
    text: "One of the best burgers I’ve had in a long time. The Beef Burger was juicy and packed with flavor. I also loved the Veg Biryani. I can’t wait to try more dishes from this restaurant.",
    img: user4,
  },
];


const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div
      data-aos="fade-up" data-aos-duration="300" 
      className="py-10 bg-white dark:bg-gray-900 duration-200">
        <div className="container">
          {/* Header Section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Delicious food, warm atmosphere, and friendly service! 🍽️❤️
            </p>
            <h1 className="text-3xl font-bold text-3xl font-bold text-gray-900 dark:text-white ">Testimonial</h1>
            <p className="text-xs text-gray-600 dark:text-gray-400">
            We are honored by the love and trust of our customers. Every dish we serve is crafted with care and passion, making each dining experience memorable. Thank you for making us your favorite place to enjoy great food!
            </p>
          </div>
          {/* testimonial Section */}
          <div 
          data-aos="zoom-in" data-aos-duration="300"
          className="grid grid-cols-1 max-w-[600px] mx-auto gap-6">
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div
                    key={id}
                    className="my-6"
                  >
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative dark:text-white"
                    >
                        <img src={img} alt="" 
                        className="rounded-full block mx-auto w-20"
                        />
                        <p className="text-gray-500 text-sm">{text}</p>
                        <h1
                        className="text-xl font-bold">{name}</h1>
                        <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                            ,,
                        </p>
                    </div>

                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
