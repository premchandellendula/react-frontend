import React from "react";

function FlyoutContent(){
  
  return <div className='h-full w-36 bg-gray-100 rounded-xl'>
    <div className='flex flex-col p-4 rounded-md'>
      <a href="/" className='p-2 hover:bg-gray-300 rounded-md'>Profile</a>
      <a href="/" className='p-2 hover:bg-gray-300 rounded-md'>Orders</a>
      <p className='cursor-pointer p-2 hover:bg-gray-300 rounded-md' >Logout</p>
    </div>
  </div>
}

export default FlyoutContent