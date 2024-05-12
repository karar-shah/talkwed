import React from 'react'

const ListCard = () => {
  return (
    <div className='relative w-full'>
        <img src="/Wadding1.png" alt="Wadding1" height={210} className='w-full' />
        <div className='absolute shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex items-center px-4 backdrop-blur-[5px] bottom-3 start-2 h-[56px] w-[95%] rounded-[5px] '>
            <p className='font-bold text-lg'> Wedding Venue</p>
        </div>
    </div>
  )
}

export default ListCard