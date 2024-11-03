import React from 'react'
import sec4 from "../../assets/sec-2.png";
const ECard = () => {
  return (
    <div className="flex w-full h-full 1 justify-center items-center gap-4 p-6 border rounded-md cursor-pointer">
      <div className=" h-full">
        <img className="max-w-[100px]  rounded-md h-full" src={sec4} alt="NA" />
      </div>
      <div className="card-body">
        <h5 className="">
          Lorem ipsum dolor sit amet consectetur Harum, accusamus?
        </h5>
        <p className="text-gray-400 text-sm">March 10, 2024</p>
      </div>
    </div>
  );
}

export default ECard