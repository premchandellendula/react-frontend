import React from 'react'
import solarPanelImg from '../../assets/images/asset 6.png'
import solarRoofImg from '../../assets/images/asset 7.png'
import powerwallImg from '../../assets/images/asset 8.png'
import megapackImg from '../../assets/images/asset 9.png'

const DropDownEnergy = () => {
    const energies = [
        {
            title : "Solar Panels",
            img : solarPanelImg
        },
        {
            title : "Solar Roof",
            img : solarRoofImg
        },
        {
            title : "Powerwall",
            img : powerwallImg
        },
        {
            title : "Megapack",
            img : megapackImg
        }
    ]
  return (
    <div className='w-[1000px] bg-white py-12 shadow-xl'>
        <div className='flex w-[90%] m-auto'>
            {/* left-div */}
            <div className='grid grid-cols-3 gap-y-4 gap-x-10 border-r p-4 w-[80%] pr-6'>
                {energies.map((energy) => <EnergyCard key={energy.id} energy={energy} />)}
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

function EnergyCard({energy}){
    return <div className='flex flex-col'>
        <img src={energy.img} alt="" className='w-[400px] m-auto my-2' />
        <h3 className='text-center text-xl font-medium'>{energy.title}</h3>
        <div className='text-center'>
            <a href="#learn" className='underline hover:text-gray-900 hover:underline hover:font-medium text-gray-500 my-1 px-1'>Learn</a>
            <a href="#order" className='underline hover:text-gray-900 hover:underline hover:font-medium text-gray-500 my-1 px-1'>Order</a>
        </div>
    </div>
}

export default DropDownEnergy