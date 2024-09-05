// you can change the speed of movement from22,23,25,25 lines :)

import { useEffect } from 'react';
import './App.css'
import { useRef } from 'react';

function App() {
  const solidCircleRef = useRef();
  const hollowCircleRef = useRef();
  let mouseX = 0, mouseY = 0;
  let solidCursorX = 0, solidCursorY = 0;
  let hollowCursorX = 0, hollowCursorY = 0;

  const handleCursor = (e) => {
      mouseX = e.pageX 
      mouseY = e.pageY   
  }

  useEffect(() => {
    const followCursor = () => {

      solidCursorX += (mouseX - solidCursorX) * 0.4
      solidCursorY += (mouseY - solidCursorY) * 0.4

      hollowCursorX += (mouseX - hollowCursorX) * 0.05
      hollowCursorY += (mouseY - hollowCursorY) * 0.05
      
      const solidCursor = solidCircleRef.current
      const hollowCursor = hollowCircleRef.current
      
      if(solidCursor){
        solidCursor.style.left = solidCursorX + 'px'
        solidCursor.style.top = solidCursorY + 'px'
      }

      if(hollowCursor){
        hollowCursor.style.left = hollowCursorX + 'px'
        hollowCursor.style.top = hollowCursorY + 'px'
      }

      requestAnimationFrame(followCursor)
    }

    document.addEventListener('mousemove', handleCursor);
    followCursor();
    return () => {
      document.removeEventListener('mousemove', handleCursor);
    }
  }, [])

  return (
    <div className=''>
      <div 
      style={{
        transform: 'translate(-50%, -50%)', 
      }}
      className='w-10 h-10 bg-gray-400 rounded-full absolute pointer-events-none transition-transform duration-150 ease-in-out' ref={solidCircleRef}></div>

      <div 
      style={{
        transform: 'translate(-50%, -50%)'
      }}
      className='w-12 h-12 border-2 border-gray-400 rounded-full absolute pointer-events-none transition-transform duration-150 ease-in-out' ref={hollowCircleRef}></div>
    </div>
  )
}

export default App