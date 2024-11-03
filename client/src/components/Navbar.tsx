import React, { useState } from "react";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-[10%] w-full top-0 bg-[#2e2e30] cust-500:px-[5%] px-[10%] flex  items-center justify-between text-white text-center cursor-pointer ">
      <div className="flex cust-900:gap-12 gap-10 h-full text-center items-center text-xl mx-2">
        {" "}
        <span className="text-6xl  font-bold font-qwitcher text-white ">
          Pings
        </span>
        <div className="cust-900:gap-12 gap-10 cust-500:flex hidden">
          <span className="mt-2 hover: ">Home</span>
          <span className="mt-2">Add Blog</span>
          <span className="mt-2">Profile</span>
        </div>
      </div>
      <div className="cust-500:hidden flex ">
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>{isOpen ? <X /> : <Menu />}</PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid grid-rows-3 gap-4 cursor-pointer ">
              <div className="border-b-2 pb-1 text-sm">Home</div>
              <div className="border-b-2 pb-1">Add Blog</div>
              <div className="border-b-2 pb-1">Profile </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div className="cust-500:flex gap-5 hidden">
        <div className=" md:flex w-full  items-center space-x-2 hidden">
          <Input
            type="email"
            placeholder="Search "
            className="rounded-full w-80 h-9 text-lg px-6"
          />
        </div>
        <div className="cust-500:flex hidden">
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="h-12 w-12 border border-white ">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80"></PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
