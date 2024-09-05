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
    'Item 10',
  ];

  const listRef = useRef();
  const [slideNumber, setSlideNumber] = useState(0);

  const prevSlide = () => {
    let distance = listRef.current.getBoundingClientRect().x - 24
    if(slideNumber > 0){
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${271 + distance}px)`
    }
    console.log(slideNumber)
    console.log(distance)
  }

  const nextSlide = () => {
    let distance = listRef.current.getBoundingClientRect().x - 24
    if(slideNumber < 5){
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-271 + distance}px)`
    }
    console.log(slideNumber)
    console.log(distance)
  }
  return (
    <div className='px-2 md:px-6 mt-4 space-y-8'>
        <div>
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
      <div className='relative w-full'>
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

            <div className='flex transition-transform duration-500 ease-in-out z-5' ref={listRef}>
                {items.map((item) => <ProductCard key={item.id} product={item} />)}
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
    </div>
  )
}

function ProductCard({product}){
  return (
    <div className='group relative p-2'>
        <img className='cursor-pointer object-cover transition duration-300 shadow-xl rounded-md group-hover:opacity-90 delay-300 bg-gray-200 h-[12vw] p-2 sm:group-hover:opacity-0 w-[255px]' src="https://google.com/image" alt="Image" />  

        <div className='opacity-0 absolute top-0 right-[30px] transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[3vw] group-hover:translate-x-[2vw] group-hover:opacity-100'>
            <img src="https://google.com/image" alt="Image" className='bg-gray-700 cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw] text-white' />
            <div className='bg-gray-300 p-2 flex flex-col justify-center items-center'>
                <p className='text-center text-xl'>{product}</p>
                <button type="button" className="text-white bg-violet-600 hover:bg-violet-800 focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 mt-2 shadow-md w-[40%]">Check out</button>
            </div>
        </div> 
              
    </div>
  )
}

export default Slider