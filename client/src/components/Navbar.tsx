import React, { useState } from "react";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

import {  Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useRecoilValue} from "recoil";
import {  userState } from "@/recoil/userAtom";

import NavPopup from "./NavPopup";



const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const user = useRecoilValue(userState);

  return (
    <div className="h-[10%] w-full top-0 bg-[#2e2e30] cust-500:px-[5%] px-[10%] flex  items-center justify-between text-white text-center cursor-pointer ">
      <div className="flex cust-900:gap-12 gap-10 h-full text-center items-center text-xl mx-2 pb-1">
        {" "}
        <span className="text-6xl  font-bold font-qwitcher text-white ">
          Pings
        </span>
        <div className="cust-900:gap-12 gap-10 cust-500:flex hidden text-base">
          <span className="mt-2 hover:underline ">
            <Link to="/">Home</Link>
            </span>
          <span className="mt-2 hover:underline text-nowrap">
            <Link to='/createping'>Add Blog</Link>{" "}
          </span>
        </div>
      </div>
      <div className="cust-500:hidden flex ">
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>{isOpen ? <X /> : <Menu />}</PopoverTrigger>
          <PopoverContent className="w-80 ">
            <div className="grid grid-rows-3 gap-4 cursor-pointer ">
              <div className="border-b-2 pb-1 text-sm">Home</div>
              <div className="border-b-2 pb-1">Add Blog</div>

              {!user ? (
                <div className="flex flex-wrap gap-2">
                  <Link to="/login">
                    <Button className="font-medium " variant="outline">
                      login
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button className="bg-[#3f3f46] hover:bg-[#18181b]">
                      SignUP
                    </Button>
                  </Link>
                </div>
              ) : (
                <NavPopup />
              )}
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div className="cust-500:flex gap-5 hidden">
        <div className=" md:flex w-full  items-center space-x-2 hidden">
          <Input
            type="text"
            placeholder="Search "
            className="rounded-full w-80 h-9  px-6"
          />
        </div>
        <div className="cust-500:flex hidden">
          {!user ? (
            <div className="flex">
              <Link to="/login">
                <Button className="text-white" variant="link">
                  login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#3f3f46] hover:bg-[#18181b]">
                  SignUP
                </Button>
              </Link>
            </div>
          ) : (
            <NavPopup />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
