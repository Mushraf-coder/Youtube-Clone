import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/youtube-logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoSearch } from "react-icons/go";
import { MdKeyboardVoice } from "react-icons/md";
import { BiVideoPlus } from "react-icons/bi";
import { CiBellOn } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";

export default function Navbar() {
  return (
    <>
      <nav className="grid grid-auto grid-cols-12 border-b-[0.1em] items-center justify-center w-full h-[70px] text-black sticky top-0 bg-white border-black">
        <button className="text-2xl border-none ml-12 pl-2 hover:bg-[#e2e0e0] hover:rounded-full w-[40px] h-[40px]">
          <RxHamburgerMenu />
        </button>
        <Link to="/">
          <img className="" src={logo} alt="img" />
        </Link>
        <input
          type="text"
          className="w-[550px] border-[gray] border-[1px] h-[40px] ml-[170px] rounded-[20px] pl-8"
          placeholder="Search"
        />
        <button className="bg-[#e9e9e9] w-[70px] h-[38px] absolute left-[874px] text-2xl text-center pl-5 rounded-r-[20px] hover:bg-[#d4d2d2]">
          <GoSearch />
        </button>
        <button className="bg-[#e9e9e9] border-none rounded-[50%] h-[40px] w-[40px] ml-[620px] text-2xl  pl-2 hover:bg-[#d1cccc]">
          <MdKeyboardVoice />
        </button>
        <button className="h-[40px] w-[40px] border-none bg-white text-3xl ml-[700px] pl-1 hover:bg-[#d4c9c9] rounded-[50%]">
          <BiVideoPlus />
        </button>
        <button className="h-[40px] w-[40px] border-none bg-white text-3xl ml-[640px] pl-1 hover:bg-[#d4c9c9] rounded-[50%]">
          <CiBellOn />
        </button>

        <h3 className="h-[40px] w-[40px] border-none bg-white text-3xl ml-[590px] pl-1 pt-1 hover:bg-[#d4c9c9] rounded-[50%]">
          <VscAccount />
        </h3>
      </nav>
    </>
  );
}
