
import React from "react";
interface props{
  title: string;
  img: string;
  date: string; 
}
var imgs = {
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const ECard:React.FC<props> = ({title , img , date}) => {
  return (
    <div className="flex w-full h-full  justify-center items-center gap-4 p-6 border rounded-md cursor-pointer max-h-[130px]">
      <div className=" h-full">
        <img className="max-w-[100px]  rounded-md h-full" src={img} style={imgs} alt="NA" />
      </div>
      <div className="card-body">
        <h5 className="text-sm">
          {
            title
          }
        </h5>
        <p className="text-gray-400 text-sm">{date}</p>
      </div>
    </div>
  );
}

export default ECard