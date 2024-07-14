import React from 'react'
import { CiCircleQuestion } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
const Payment = () => {

  return (
    <div>
      <div className="flex justify-between">
        <p className='font-bold text-[18px]'>Overview</p>
        <p className='text-gray-400'>This Month</p>


      </div>
      <br />
      <br />
      <div className='grid grid-cols-3 gap-2'>
        {/* card 1  */}
        <div className='bg-[#0f6eb4] rounded-lg '>
          <div className='bg-[#0f6eb4]  px-4 py-1 rounded-lg text-white' >
            <div className='flex items-center gap-1 mt-3'>
              <p>Next payout</p>
              <CiCircleQuestion size={15} />
            </div>
            <br />
            <div className='flex justify-between items-center'>
              <p className='text-lg font-bold'>$2093.23</p>
              <div className='flex items-center'>
                <p className='underline cursor-pointer'>23 Orders </p> <MdKeyboardArrowRight size={18} />
              </div>
            </div>

          </div>
          <div className='bg-[#0a4b7d]  px-4 py-1 rounded-md text-white flex justify-between'>
            <p className='text-[12px]'>Next Payout Date :</p>
            <p className='font-medium'>Today 4:00PM</p>
          </div>
        </div>
        {/* card 2  */}
        <div className='rounded-lg shadow-lg'>
          <div className=' px-4 py-1 rounded-lg' >
            <div className='flex items-center gap-1 mt-3'>
              <p>Next payout</p>
              <CiCircleQuestion size={15} />
            </div>
            <br />
            <div className='flex justify-between items-center'>
              <p className='text-[28px] font-bold'>$92093.23</p>
              <div className='flex items-center'>
                <p className='underline cursor-pointer'>23 Orders </p> <MdKeyboardArrowRight size={18} />
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#0f6eb4] rounded-lg'>
          <div className='bg-[#0f6eb4]  px-4 py-1 rounded-lg text-white' >
            <div className='flex items-center gap-1 mt-3'>
              <p>Next payout</p>
              <CiCircleQuestion size={15} />
            </div>
            <br />
            <div className='flex justify-between items-center'>
              <p className='text-lg font-bold'>$2093.23</p>
              <div className='flex items-center'>
                <p className='underline cursor-pointer'>23 Orders </p> <MdKeyboardArrowRight size={18} />
              </div>
            </div>

          </div>
          <div className='bg-[#0a4b7d]  px-4 py-1 rounded-md text-white flex justify-between'>
            <p className='text-[12px]'>Next Payout Date :</p>
            <p className='font-medium'>Today 4:00PM</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment