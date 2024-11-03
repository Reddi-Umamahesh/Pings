import React from 'react'
import image1 from '../../assets/space.jpeg'
import image2 from '../../assets/hero-img-2.jpg'
import image3 from "../../assets/hero-img-3.jpg";
import image4 from "../../assets/hero-img-2-4.jpg";
import image5 from "../../assets/hero-img-5.jpg";
import { Button } from '../ui/button';
import { CircleUserRound } from 'lucide-react';
import Card from './Card';


var img1 = {
    backgroundImage: `url(${image1})`,
    backgroundSize: 'cover',
    
}
var img2 = `url(${image2})`;
var img3 =  `url(${image3})`;
var img4 = `url(${image4})`;
var img5 =`url(${image5})`;
  


const Hero:React.FC = () => {
  return (
    <div className="lg:h-[85%]   w-full px-[8%] my-[4%] grid md:grid-cols-2 grid-cols-1 gap-4  mb-10">
      <div
        className="border min-h-[400px] flex justify-end items-end bg-white  cust-400:p-6 p-3 rounded-lg cursor-pointer bg-top text-white"
        style={img1}
      >
        <div className="">
          <Button className="bg-[#18181b] text-white font-medium mb-4">
            Space
          </Button>
          <h5 className="text-white font-medium lg:text-2xl cust-500:text-xl text-lg backdrop-blur-sm">
            Exploring the Mysteries of Astronets: Connecting the Universe
            Through Advanced Network Technologies and Cosmic Insights
          </h5>
          <div className="flex gap-2 ">
            <Button
              className="  font-semibold hover:bg-[#3f3f46] hover:text-white border-0"
              variant={"ghost"}
            >
              <CircleUserRound />
              <span className="">John grisham</span>
            </Button>
            <span className="mt-[6px]">December 20,2024</span>
          </div>
        </div>
      </div>
      <div className=" grid cust-400:grid-cols-2 md:grid-rows-2 gap-4 ">
        <div>
          <Card
            title=" Exploring the Mysteries of Astronets: Connecting the Universe Through
          Advanced Network "
            button="Technology"
            image={img2}
            buttonLink=""
          />
        </div>
        <div>
          <Card
            title=" Exploring the Mysteries of Astronets: Connecting the Universe Through
          Advanced Network "
            button="Technology"
            image={img3}
            buttonLink=""
          />
        </div>
        <div>
          <Card
            title=" Exploring the Mysteries of Astronets: Connecting the Universe Through
          Advanced Network "
            button="Technology"
            image={img4}
            buttonLink=""
          />
        </div>
        <div>
          <Card
            title=" Exploring the Mysteries of Astronets: Connecting the Universe Through
          Advanced Network "
            button="Technology"
            image={img5}
            buttonLink=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero