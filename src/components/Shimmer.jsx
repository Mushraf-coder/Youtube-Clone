import React from 'react'

function Shimmer() {
    const arr=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  return (
    <>
    <div className='flex flex-wrap gap-8 justify-center items-center w-full mt-4'>
    {   arr.map((list)=>(
            <div className="flex flex-col gap-2">
            <h1 className='w-[350px] h-[200px] hover:duration-400 hover:rounded-3xl bg-[#c5c4c4]'></h1>
            <div className="flex items-center  w-full h-[50px] gap-3 ">
                <p className="w-12 h-11 rounded-[50%] bg-[#c5c4c4]"></p>
                <div className='flex flex-col items-center gap-2 '>
                <p className="w-[280px] h-[20px] text-[13px] bg-[#c5c4c4]"></p>
                <p className="w-[280px] h-[20px] text-[13px] bg-[#c5c4c4]"></p>
                </div>
            

          </div>
            </div>
        ))}
    </div>
    </>
  )
}

export default Shimmer