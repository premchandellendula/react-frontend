import { useRef, useState } from 'react';
import './App.css'

function App() {

  const cardRef = useRef(null)
  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const x = e.clientX - rect.left - width / 2
    const y = e.clientY - rect.top - height / 2

    cardRef.current.style.transform = `rotateY(${x / 10}deg) rotateX(${-y / 10}deg)`
  }

  const handleMouseLeave = (e) => {
    cardRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`
  }

  return (
    <>
      <div className='relative w-60 h-80 bg-white rounded-md' 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d'
      }}
      >
      </div>
    </>
  )
}

export default App
