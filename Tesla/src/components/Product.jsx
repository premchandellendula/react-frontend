import React from 'react'

const Product = ({product}) => {
  return (
    <div className='h-[650px] overflow-hidden relative'>
        <img src={product.img} alt="" className='w-full h-full object-cover object-center' />
        <div className='absolute inset-0 flex flex-col justify-start items-center mt-10 md:mt-16'>
            <h2 className='text-[3.3rem] text-white font-semibold'>{product.model}</h2>
            <p className='cursor-pointer text-[1.7rem]  text-white font-semibold underline underline-offset-4 w-[80%] text-center'>{product.desc}</p>
            {product.price && (
              <p className='text-white text-[1.2rem] font-semibold'>From &#36;{product.price} </p>
            )}
        </div>
        <div className='absolute inset-0 flex justify-center items-end'>
            <button className='bg-blue-500 rounded-md text-white px-[4.5rem] md:px-[2rem] lg:px-[6rem] py-2.5 m-2 mb-8 text-[0.9rem]'>Order Now</button>
            <button className='bg-gray-100 text-black rounded-md px-[4.5rem] md:px-[2rem] lg:px-[6rem] py-2.5 m-2 mb-8 text-[0.9rem]'>Learn More</button>
        </div>
    </div>
  )
}

export default Product