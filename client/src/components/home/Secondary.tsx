import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import image1 from "../../assets/sec-1.png";
import image2 from "../../assets/sec-2.png";
import image3 from "../../assets/sec-3.png";
import image4 from "../../assets/sec-4.png";
import Card from './Card';
import ECard from './ECard';
var img1 = `url(${image1})`;
var img2 = `url(${image2})`;
var img3 = `url(${image3})`;
var img4 = `url(${image4})`;

const Secondary:React.FC = () => {
  return (
    <div className=" w-full px-[8%]">
      <div className="w-full flex justify-between ">
        <h5 className="lg:text-3xl  text-2xl  font-semibold">Trending</h5>
        <Button
          className="text-[#18181b] font-semibold hover:bg-[#18181b] hover:text-white lg:mt-3 cust-500:flex hidden"
          variant={"outline"}
        >
          View All Posts <ArrowRight />
        </Button>
      </div>
      <div className="cust-800:h-[55%] cust-800:min-h-[350px] grid cust-800:grid-cols-4 cust-400:grid-cols-2 grid-cols-1 gap-4 mt-[3%]">
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
            image={img1}
            buttonLink=""
          />
        </div>
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
            image={img4}
            buttonLink=""
          />
        </div>
      </div>
      <div className="mt-[5%]">
        <h5 className="font-semibold lg:text-3xl text-2xl">Editor's Pick</h5>
        <div className="grid cust-900:grid-cols-3  gap-4 mt-[3%] ">
          <div>
            <ECard
              title="Lorem ipsum dolor sit amet consectetur Harum, accusamus?"
              img={image2}
              date="March 10, 2024"
            />
          </div>
          <div>
            <ECard
              title="Lorem ipsum dolor sit amet consectetur Harum, accusamus?"
              img={image2}
              date="March 10, 2024"
            />
          </div>
          <div>
            <ECard
              title="Lorem ipsum dolor sit amet consectetur Harum, accusamus?"
              img={image2}
              date="March 10, 2024"
            />
          </div>
          <div>
            <ECard
              title="Lorem ipsum dolor sit amet consectetur Harum, accusamus?"
              img={image2}
              date="March 10, 2024"
            />
          </div>
          <div>
            <ECard
              title="Lorem ipsum dolor sit amet consectetur Harum, accusamus?"
              img={image2}
              date="March 10, 2024"
            />
          </div>
          <div>
            <ECard
              title="Lorem ipsum dolor sit amet consectetur Harum, accusamus?"
              img={image1}
              date="March 10, 2024"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Secondary