import React from "react";
import { TbGridDots } from "react-icons/tb";
import { VscAccount } from "react-icons/vsc";
import Search from "./Search";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-between px-[30px] items-center">
        <div className="flex space-x-6 mt-4">
          <p className="cursor-pointer hover:underline">About</p>
          <p className="cursor-pointer hover:underline">Store</p>
        </div>
        <div className="flex mt-5">
          <p className="mr-6 cursor-pointer hover:underline">Gmail</p>
          <p className="cursor-pointer hover:underline">Images</p>
          <TbGridDots className="ml-5 cursor-pointer" size={20} />
          <VscAccount className="ml-5 -mt-1 cursor-pointer" size={30} />
        </div>
      </div>

      <div className="flex flex-1 flex-col mt-[10%]">
        <img
          className="object-contain h-[100px]"
          src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="logo"
        />

        <div>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
