
import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const cursorRef = useRef();
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  const handleCursor = (e) => {
      mouseX = e.pageX 
      mouseY = e.pageY   
  }

  useEffect(() => {
    const followCursor = () => {

      const cursor = cursorRef.current
      
      cursorX += (mouseX - cursorX) * 0.1
      cursorY += (mouseY - cursorY) * 0.1
      
      if(cursor){
        cursor.style.left = cursorX + 'px'
        cursor.style.top = cursorY + 'px'
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
      className='w-10 h-10 bg-gray-400 rounded-full absolute pointer-events-none transition-transform duration-150 ease-in-out' ref={cursorRef}></div>
    </div>
  )
}

export default App