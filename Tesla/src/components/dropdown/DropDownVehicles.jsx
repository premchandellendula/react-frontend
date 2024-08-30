import React from 'react'
import modelSImg from '../../assets/images/asset 0.png'
import model3Img from '../../assets/images/asset 1.png'
import modelXImg from '../../assets/images/asset 2.png'
import modelYImg from '../../assets/images/asset 3.png'
import cyberTruckImg from '../../assets/images/asset 4.png'
import moreImg from '../../assets/images/asset 5.png'

const DropDownVehicles = () => {
    const vehicles = [
        {
            title : "Model S",
            img : modelSImg
        },
        {
            title : "Model 3",
            img : model3Img
        },
        {
            title : "Model x",
            img : modelXImg
        },
        {
            title : "Model Y",
            img : modelYImg
        },
        {
            title : "Cybertruck",
            img : cyberTruckImg
        },
        {
            title : "Help me choose",
            img : moreImg
        }
    ]
  return (
    <div className='w-[1000px] bg-white py-12 shadow-xl'>
        <div className='flex w-[90%] m-auto'>
            {/* left-div */}
            <div className='grid grid-cols-3 gap-y-4 gap-x-10 border-r p-4 w-[80%] pr-6'>
                {vehicles.map((vehicle) => <VehicleCard key={vehicle.id} vehicle={vehicle} />)}
            </div>

            {/* right-div */}
            <div className='flex flex-col w-[20%] ml-10 mt-10 gap-y-2'>
                <a className='hover:underline underline-offset-4' href="#inventory">Inventory</a>
                <a className='hover:underline underline-offset-4' href="#used">Used Cars</a>
                <a className='hover:underline underline-offset-4' href="#drive">Demo Drive</a>
                <a className='hover:underline underline-offset-4' href="#tradein">Trade-in</a>
                <a className='hover:underline underline-offset-4' href="#compare">Compare</a>
                <a className='hover:underline underline-offset-4' href="#charge">Help Me Charge</a>
                <a className='hover:underline underline-offset-4' href="#fleet">Fleet</a>
                <a className='hover:underline underline-offset-4' href="#semi">Semi</a>
                <a className='hover:underline underline-offset-4' href="#roadster">Roadster</a>
            </div>
        </div>
    </div>
  )
}

function VehicleCard({vehicle}){
    return <div className='flex flex-col'>
        <img src={vehicle.img} alt="" className='w-[400px] m-auto my-2' />
        <h3 className='text-center text-xl font-medium'>{vehicle.title}</h3>
        <div className='text-center'>
            <a href="#learn" className='underline hover:text-gray-900 hover:underline hover:font-medium text-gray-500 my-1 px-1'>Learn</a>
            <a href="#order" className='underline hover:text-gray-900 hover:underline hover:font-medium text-gray-500 my-1 px-1'>Order</a>
        </div>
    </div>
}

export default DropDownVehicles