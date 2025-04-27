import React from "react";
import img1 from "../../assets/Curry/Curry9.png";
import img2 from "../../assets/Curry/margherita_pizza.png";
import img3 from "../../assets/Curry/Curry2.png";
import img4 from "../../assets/Curry/Curry6.png";
import img5 from "../../assets/Curry/sushi_roll.png";
import img6 from "../../assets/Curry/pad_thai.png";

const ServicesData = [
  {
    id: 1,
    img: img1,
    name: "Pork steak",
    description:
      "Pork steak, also known as pork blade steak or Boston butt steak, is a cut of pork from the shoulder blade, often a cheaper alternative to pork chops. It's characterized by its higher fat content and marbling, leading to a more robust flavor and juicier texture when cooked. Pork steaks are typically cut 1/2 to 3/4 inches thick and can be found at most grocery stores. ",
  },
  {
    id: 2,
    img: img2,
    name: "Margherita Pizza",
    description:
      "Classic Italian pizza topped with fresh mozzarella, basil, and tomato sauce.",
  },
  {
    id: 3,
    img: img3,
    name: "Shrimp curry",
    description:
      "Shrimp curry, also known as prawn curry, is a popular curry dish featuring shrimp (or prawns) cooked in a flavorful sauce, typically with spices, herbs, and often coconut milk. The dish is found in various cuisines, including Indian, Sri Lankan, Indonesian, and Thai, with regional variations in flavor profiles and ingredients. ",
  },
  {
    id: 4,
    img: img4,
    name: "Japanese curry",
    description:
      "Japanese curry (kare raisu) is a uniquely Japanese dish, typically a thick, stew-like curry with a mild, slightly sweet flavor that's popular across the country. It's commonly made with ingredients like potatoes, carrots, onions, and a choice of meat (pork or beef), and is served over rice. The sauce is often made with curry powder or a roux (a mixture of flour and butter) and features a balance of spices and a distinct Japanese flavor profile.",
  },
  {
    id: 5,
    img: img5,
    name: "Sushi Roll",
    description:
      "Fresh sushi roll with rice, seaweed, salmon, avocado, and cucumber.",
  },
  {
    id: 6,
    img: img6,
    name: "Pad Thai",
    description:
      "Stir-fried rice noodles with shrimp, tofu, peanuts, and a sweet-savory sauce.",
  },
];

const Services = () => {
  return (
    <div className="py-10 bg-white dark:bg-gray-900 duration-200">
      <div className="container">
        {/* Header Section */}
        <div
          data-aos="fade-up"
          data-aos-duration="300"
          className="text-center mb-20 max-w-[400px] mx-auto"
        >
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Our foods main category
          </p>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Special and Tasty Foods
          </h1>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Explore the main categories of our delicious menu, featuring a
            variety of flavors from around the world. From rich Indian curries
            to classic Italian pizzas, our food selection offers something for
            everyone to enjoy.
          </p>
        </div>
        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-14 md:gap-10 place-items-center">
          {ServicesData.map(({ id, img, name, description }) => (
            <div
              data-aos="zoom-out"
              data-aos-duration="300"
              key={id}
              className="max-w-[300px]  group rounded-2xl bg-white dark:bg-gray-800 dark:hover:bg-primary hover:bg-primary hover:text-white duration-300 shadow-xl"
            >
              <div className="h-[100px]">
                <img
                  src={img}
                  alt=""
                  className="max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300 p-1"
                />
              </div>
              <div className="p-4 text-center">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  {name}
                </h1>
                <p className="text-gray-500 group-hover:text-dark dark:group-hover:text-white duration-300 text-sm line-clamp-2">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
