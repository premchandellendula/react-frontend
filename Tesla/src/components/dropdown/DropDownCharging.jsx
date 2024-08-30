import React from 'react'
import chargingImg from '../../assets/images/asset 10.jpeg'
import homeChargingImg from '../../assets/images/asset 11.jpeg'
import superChargingImg from '../../assets/images/asset 12.png'

const DropDownCharging = () => {
    const chargers = [
        {
            title : "Charging",
            img : chargingImg
        },
        {
            title : "Home Charging",
            img : homeChargingImg
        },
        {
            title : "Supercharging",
            img : superChargingImg
        }
    ]
  return (
    <div className='w-[1000px] bg-white py-12 shadow-xl'>
        <div className='flex w-[90%] m-auto'>
            {/* left-div */}
            <div className='grid grid-cols-3 gap-y-4 gap-x-10 border-r p-4 w-[80%] pr-6'>
                {chargers.map((charger) => <ChargerCard key={charger.id} charger={charger} />)}
            </div>

            {/* right-div */}
            <div className='flex flex-col w-[20%] ml-10'>
                <a className='hover:underline underline-offset-4 mb-1' href="#charge">Help Me Charge</a>
                <a className='hover:underline underline-offset-4 mb-1' href="#calci">Charging Calculator</a>
                <a className='hover:underline underline-offset-4 mb-1' href="#NACS">Charging With NACS</a>
                <a className='hover:underline underline-offset-4 mb-1' href="#tradein">Supercharge Voting</a>
                <a className='hover:underline underline-offset-4 mb-1' href="#compare">Host a Supercharger</a>
                <a className='hover:underline underline-offset-4 mb-1' href="#charge">Commercial Charging</a>
                <a className='hover:underline underline-offset-4 mb-1' href="#fleet">Host Wall Connectors</a>
            </div>
        </div>
    </div>
  )
}

function ChargerCard({charger}){
    return <div className='flex flex-col'>
        <img src={charger.img} alt="" className='w-[400px] m-auto my-2' />
        <h3 className='text-center text-xl font-medium'>{charger.title}</h3>
        <div className='text-center'>
            <a href="#learn" className='underline hover:text-gray-900 hover:underline hover:font-medium text-gray-500 my-1 px-1'>Learn</a>
            <a href="#order" className='underline hover:text-gray-900 hover:underline hover:font-medium text-gray-500 my-1 px-1'>Order</a>
        </div>
    </div>
}

export default DropDownCharging