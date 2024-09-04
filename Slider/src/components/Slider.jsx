import React, { useRef, useState } from 'react'

const Slider = ({heading}) => {
    const items = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
    'Item 9',
    'Item 10'
  ];

  const listRef = useRef();
  const [slideNumber, setSlideNumber] = useState(0);

  const prevSlide = () => {
    let distance = listRef.current.getBoundingClientRect().x
    if(slideNumber > 0){
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${271 + distance}px)`
    }
    console.log(slideNumber)
    console.log(distance)
  }

  const nextSlide = () => {
    let distance = listRef.current.getBoundingClientRect().x
    if(slideNumber < 5){
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-271 + distance}px)`
    }
    console.log(slideNumber)
  }
  return (
    <div className='my-16'>
      <div className='flex items-center'>
           <h2 className='text-xl ml-2'>Slider</h2>
           <button className="text-violet-700 rounded-full flex items-center relative group ml-2 gap-2 overflow-hidden w-20">
             <p className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-xs'>Explore all</p>
             <svg 
                 xmlns="http://www.w3.org/2000/svg" 
                 width="24" 
                 height="24" 
                 viewBox="0 0 24 24" 
                 style={{fill: 'rgba(147, 51, 234)', transform: '', msFilter: ''}}
                 className="transition-transform duration-300 ease-in-out group-hover:translate-x-[52px]"
             >
                 <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
            </svg>
           </button>
       </div>

       <div className="relative w-full overflow-hidden">
         <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 text-gray-400 rounded-full"
          onClick={prevSlide}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="36" 
            height="36" 
            viewBox="0 0 24 24" 
            style={{fill: 'rgba(0, 0, 0, 0.5)', transform: '', msFilter: ''}}
            className="transition-transform duration-200 ease-in-out hover:scale-125"
            >
              <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
          </svg>
        </button>
        <div className="relative flex transition-all ease-in duration-300" ref={listRef}>
          <div
            className="flex transition-transform duration-500 ease-in-out"      
          >
            {items.map((item, index) => <ProductCard key={index} product={item} />)}
          </div>
        </div>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 text-gray-500 rounded-full"
          onClick={nextSlide}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="36" 
            height="36" 
            viewBox="0 0 24 24" 
            style={{fill: 'rgba(0, 0, 0, 0.5)',transform:'' ,msFilter: ''}}
            className="transition-transform duration-200 ease-in-out hover:scale-125"
            >
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

function ProductCard({product}){
  return <div className="p-2 transition-transform duration-300 flex flex-col">
    <div className='bg-blue-300 hover:scale-105'>
      <div className='bg-gray-300 h-40 w-[255px] cursor-pointer'>
        {product}
      </div>

      <div className='flex flex-col justify-center items-center px-2 py-1 gap-y-1'>
        {product}
        <button type="button" className="text-white bg-violet-600 hover:bg-violet-800 focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 shadow-md w-[40%]">Check out</button>
      </div>    
    </div>
  </div>
}

export default Slider