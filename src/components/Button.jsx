import React from 'react'

function Button({name}) {
  return (
    <button className='w-[75px] rounded-[10px] h-[35px] text-[14px] ml-[52px] mt-[10px] bg-[#d8d1da] text-black text-center border-none hover:bg-black hover:text-white ' >{name}

    </button>
  )
}

export default Button