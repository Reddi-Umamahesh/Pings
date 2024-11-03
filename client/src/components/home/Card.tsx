import React from "react";

import { Button } from "../ui/button";

interface Data {
  title: string;
  button: string;
  buttonLink: string;
  image: string;
}
const Card: React.FC<Data> = ({ title, button, buttonLink, image }) => {
  var img = {
    backgroundImage: image,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div
      className="w-full h-full border flex justify-end items-end bg-white  rounded-lg p-4 cust-500:pb-4 cursor-pointer bg-top text-white hover:shadow-2xl"
      style={img}
    >
      <div className="">
        <Button className="bg-[#18181b] text-white font-medium mb-4 h-7 text-xs ">
          {button}
        </Button>
        <h5 className="text-white font-medium lg:text-sm  cust-500:text-sm backdrop-blur-sm">
          {title}{buttonLink}
        </h5>
      </div>
    </div>
  );
};

export default Card;
