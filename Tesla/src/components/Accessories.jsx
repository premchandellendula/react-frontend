import React from 'react'
import accessoriesImg from '../../src/assets/images/asset 25.jpeg'

const Accessories = () => {
  return (
    <div className='h-[650px] overflow-hidden relative'>
        <img src={accessoriesImg} alt="" className='w-full h-full object-cover object-center' />
        <div className='absolute inset-0 flex flex-col justify-start items-center mt-16'>
            <h2 className='text-[3.3rem] text-white font-semibold'>Accessories</h2>
        </div>
        <div className='absolute inset-0 flex justify-center items-end'>
            <button className='bg-blue-500 rounded-md text-white px-[6rem] py-2.5 m-2 mb-8'>Shop Now</button>
        </div>
    </div>
  )
}

export default Accessories