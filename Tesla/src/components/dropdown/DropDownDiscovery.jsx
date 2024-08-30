import React from 'react'

const DropDownDiscover = () => {
  return (
    <div className='w-[900px] bg-white py-12 shadow-xl'>
      <div className='w-[70%] m-auto flex justify-between'>
        <div>
            <h3 className='text-gray-600 text-base mb-3'>Resources</h3>
            <div className='flex flex-col gap-y-1'>
                <a className='hover:underline underline-offset-4 text-base' href="#inventory">Demo Drive</a>
                <a className='hover:underline underline-offset-4 text-base' href="#used">Insurance</a>
                <a className='hover:underline underline-offset-4 text-base' href="#drive">Military Purchase Program</a>
                <a className='hover:underline underline-offset-4 text-base' href="#tradein">Video Guides</a>
                <a className='hover:underline underline-offset-4 text-base' href="#compare">Customer Stories</a>
                <a className='hover:underline underline-offset-4 text-base' href="#charge">Events</a>
            </div>
        </div>

        <div>
            <h3 className='text-gray-600 text-base mb-3'>Location Services</h3>
            <div className='flex flex-col gap-y-1'>
                <a className='hover:underline underline-offset-4 text-base' href="#inventory">Find Us</a>
                <a className='hover:underline underline-offset-4 text-base' href="#used">Find a Collision Center</a>
                <a className='hover:underline underline-offset-4 text-base' href="#drive">Find a Certified Installer</a>
            </div>
        </div>

        <div>
            <h3 className='text-gray-600 text-base mb-3'>Company</h3>
            <div className='flex flex-col gap-y-1'>
                <a className='hover:underline underline-offset-4 text-base' href="#inventory">About</a>
                <a className='hover:underline underline-offset-4 text-base' href="#used">Careers</a>
                <a className='hover:underline underline-offset-4 text-base' href="#drive">Investor Relations</a>
                <a className='hover:underline underline-offset-4 text-base' href="#tradein">Video Guides</a>
                <a className='hover:underline underline-offset-4 text-base' href="#compare">Customer Stories</a>
                <a className='hover:underline underline-offset-4 text-base' href="#charge">Events</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DropDownDiscover