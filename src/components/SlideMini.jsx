import React from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GoVideo } from "react-icons/go";

function SlideMIni() {
  return (
    <div className="flex flex-col items-center  w-[10%] ">
      <div className="flex flex-col justify-end items-center  pt-5">
        <h1 className="text-2xl ">
          <IoMdHome />
        </h1>
        <h1 className="text-sm">Home</h1>
      </div>
      <div className="flex flex-col items-center  pt-9">
        <h1 className="text-2xl ">
        <SiYoutubeshorts />
        </h1>
        <h1 className="text-sm">Shorts</h1>
      </div>
      <div className="flex flex-col items-center  pt-9">
        <h1 className="text-2xl ">
        <MdOutlineSubscriptions />
        </h1>
        <h1 className="text-sm">Subscription</h1>
      </div>
      <div className="flex flex-col items-center pt-9">
        <h1 className="text-2xl ">
        <GoVideo />
        </h1>
        <h1 className="text-sm">You</h1>
      </div>
    </div>
  );
}

export default SlideMIni;
