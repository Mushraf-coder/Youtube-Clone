import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { LuUserSquare2 } from "react-icons/lu";
import { GoHistory } from "react-icons/go";
import { MdVideoSettings } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaFire } from "react-icons/fa6";
import { AiOutlineShopping } from "react-icons/ai";
import { PiMusicNoteThin } from "react-icons/pi";
import { PiFilmSlate } from "react-icons/pi";
import { MdOutlineWifiTethering } from "react-icons/md";
import { IoGameControllerSharp } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { GiAmpleDress } from "react-icons/gi";
import { IoMdWifi } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { SiYoutubemusic } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { IoHelpCircleOutline } from "react-icons/io5";
import { BiMessageSquareError } from "react-icons/bi";


function Slide() {
  return (
    <>
    <div className='w-[15%] h-full bg-white overflow-auto mt-3 ml-2  '>

      <div className='h-[140px] border-b-[1px] '>

    <div className='flex items-center gap-2 rounded-xl hover:bg-[#f7f7f6] h-10'>
        <button className='bg-transparent border-none text-2xl '><IoMdHome/></button>
        <p className='pl-4'>Home</p>
          </div>

          <div className='flex items-center gap-2 rounded-xl hover:bg-[#f7f7f6] h-10'>
        <button className='bg-transparent border-none text-2xl'><SiYoutubeshorts /> </button>
        <p className='pl-4'>Shorts</p>
          </div>

          <div className='flex items-center gap-2 rounded-xl hover:bg-[#f7f7f6] h-10'>
        <button className='bg-transparent border-none text-2xl'><MdOutlineSubscriptions /></button>
        <p className='pl-4'>Subscription</p>
          </div>

          </div>

          <div className='border-b-[1px] '>
<h3 className='flex justify-start items-center ml-2'>You <LiaGreaterThanSolid /></h3>
<div className='flex items-center gap-2 rounded-xl hover:bg-[#f7f7f6] h-10'>

    <button className='bg-transparent border-none text-2xl'><LuUserSquare2 /> </button>
    <p className='pl-4'>Your Channel</p>
      </div>

      <div className='flex items-center gap-2 rounded-xl hover:bg-[#f7f7f6] h-10'>
    <button className='bg-transparent border-none text-2xl'><GoHistory /></button>
    <p className='pl-4'>History</p>
      </div>

      <div className='flex items-center gap-2 rounded-xl hover:bg-[#f7f7f6] h-10'>
    <button className='bg-transparent border-none text-2xl'><MdVideoSettings /> </button>
    <p className='pl-4'>Your videos</p>
</div>
<div className='flex items-center gap-2 rounded-xl hover:bg-[#f7f7f6] h-10'>
<button className='bg-transparent border-none text-2xl'><MdOutlineWatchLater /> </button>
    <p className='pl-4'>Watch later</p>
      </div>

      <div className='flex items-center gap-2 rounded-xl hover:bg-[#f7f7f6] h-10'>
    <button className='bg-transparent border-none text-2xl'><FaDownload /> </button>
    <p className='pl-4'>Downloads</p>
      </div>

      <div className='flex items-center gap-2 rounded-xl hover:bg-[#f7f7f6] h-10'>
    <button className='bg-transparent border-none text-2xl'><FaAngleDown /></button>
    <p className='pl-4'>Show more</p>
</div>

      </div>

      <div className='border-b-[1px] '>

        <h3 className='you'>Subscription</h3>

      <div className='flex items-center gap-2 rounded-xl hover:bg-[#f7f7f6] h-10'>
    <button className='bg-transparent border-none text-2xl'><IoIosAddCircleOutline /></button>
    <p className='pl-4'>Browse channels</p>
    </div>

      </div>
     
      <div className='border-b-[1px] '>

      <h3 className='you'>Explore </h3>

      <div className='flex items-center gap-2 rounded-xl hover:bg-[#f7f7f6] h-10'>
    <button className='bg-transparent border-none text-2xl'><FaFire /></button>
    <p className='pl-4'>Trending</p>
    </div>

    <div className='flex items-center gap-2 rounded-xl hover:bg-[#f7f7f6] h-10'>
    <button className='bg-transparent border-none text-2xl'><AiOutlineShopping /></button>
    <p className='pl-4'>Shopping</p>
    </div>

    <div className='flex items-center gap-2 rounded-xl hover:bg-[#f7f7f6] h-10'>
    <button className='bg-transparent border-none text-2xl'><PiMusicNoteThin /></button>
    <p className='pl-4'>Music</p>
    </div>

    <div className='flex items-center gap-2 rounded-xl hover:bg-[#f7f7f6] h-10'>
    <button className='bg-transparent border-none text-2xl'><PiFilmSlate /></button>
    <p className='pl-4'>Films</p>
    </div>

    <div className='flex items-center gap-2 rounded-xl hover:bg-[#f7f7f6] h-10'>
    <button className='bg-transparent border-none text-2xl'><MdOutlineWifiTethering /></button>
    <p className='pl-4'>Live</p>
    </div>

    <div className='flex items-center gap-2 rounded-xl hover:bg-[#f7f7f6] h-10'>
    <button className='bg-transparent border-none text-2xl'><IoGameControllerSharp /></button>
    <p className='pl-4'>Gaming</p>
    </div>

    <div className='flex items-center gap-2 rounded-xl hover:bg-[#f7f7f6] h-10'>
    <button className='bg-transparent border-none text-2xl'><IoNewspaperOutline /></button>
    <p className='pl-4'>News</p>
    </div>

    <div className='flex items-center gap-2 rounded-xl hover:bg-[#f7f7f6] h-10'>
    <button className='bg-transparent border-none text-2xl'><TfiCup /></button>
    <p className='pl-4'>Sport</p>
    </div>

    <div className='flex items-center gap-2 rounded-xl hover:bg-[#f7f7f6] h-10'>
    <button className='bg-transparent border-none text-2xl'><PiLightbulbLight /></button>
    <p className='pl-4'>Learning</p>
    </div>

    <div className='flex items-center gap-2 rounded-xl hover:bg-[#f7f7f6] h-10'>
    <button className='bg-transparent border-none text-2xl'><GiAmpleDress /></button>
    <p className='pl-4'>Fashion & Beauty</p>
    </div>

    <div className='flex items-center gap-2 rounded-xl hover:bg-[#f7f7f6] h-10'>
    <button className='bg-transparent border-none text-2xl'><IoMdWifi /></button>
    <p className='pl-4'>Podcast</p>
    </div>

      </div>

      <div className='border-b-[1px] '>

<h3 className='you'>More from YouTube </h3>

<div className='flex items-center gap-2 rounded-xl hover:bg-[#f7f7f6] h-10'>
<button className='bg-transparent text-red-600 border-none text-2xl'><FaYoutube /></button>
<p className='pl-4'>YouTube Premium</p>
</div>

<div className='flex items-center gap-2 rounded-xl hover:bg-[#f7f7f6] h-10'>
<button className='bg-transparent text-red-600 border-none text-2xl'><SiYoutubestudio /></button>
<p className='pl-4'>YouTube Studio</p>
</div>

<div className='flex items-center gap-2 rounded-xl hover:bg-[#f7f7f6] h-10'>
<button className='bg-transparent text-red-600 border-none text-2xl'><SiYoutubemusic /></button>
<p className='pl-4'>TouTube Kids</p>
</div>

<div className='flex items-center gap-2 rounded-xl hover:bg-[#f7f7f6] h-10'>
<button className='bg-transparent text-red-600 border-none text-2xl'><TbBrandYoutubeKids /></button>
<p className='pl-4'>YouTube Music</p>
</div>


</div>


<div className='border-b-[1px] '>

<div className='flex items-center gap-2 rounded-xl hover:bg-[#f7f7f6] h-10'>
<button className='bg-transparent border-none text-2xl'><IoSettingsOutline /></button>
<p className='pl-4'>Settings</p>
</div>

<div className='flex items-center gap-2 rounded-xl hover:bg-[#f7f7f6] h-10'>
<button className='bg-transparent border-none text-2xl'><MdOutlineOutlinedFlag /></button>
<p className='pl-4'>Report history</p>
</div>

<div className='flex items-center gap-2 rounded-xl hover:bg-[#f7f7f6] h-10'>
<button className='bg-transparent border-none text-2xl'><IoHelpCircleOutline /></button>
<p className='pl-4'>Help</p>
</div>

<div className='flex items-center gap-2 rounded-xl hover:bg-[#f7f7f6] h-10'>
<button className='bg-transparent border-none text-2xl'><BiMessageSquareError /></button>
<p className='pl-4'>Send feedback</p>
</div>


</div>


      </div>
    
    </>
  )
}

export default Slide
