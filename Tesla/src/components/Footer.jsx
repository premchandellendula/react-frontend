import React from 'react'

const Footer = () => {
    const paras = [
        {   
            num : 1,
            desc: "Price before estimated savings is $44,130, including Destination and Order Fees, but excluding taxes and other fees. Subject to change. Vehicle shown has upgrades that will increase the price. Estimated savings includes $5,000 in gas savings estimated over five years, the $7,500 Federal Tax Credit and state incentives, available to eligible buyers and subject to MSRP caps. Model 3 Rear-Wheel Drive and leases not eligible for the Federal Tax Credit."
        },
        {
            num : 2,
            desc: "Price before estimated savings is $46,630, including Destination and Order Fees, but excluding taxes and other fees. Subject to change. Vehicle shown has upgrades that will increase the price. Estimated savings includes $6,000 in gas savings estimated over five years, the $7,500 Federal Tax Credit and state incentives, available to eligible buyers and subject to MSRP caps. Not all vehicles, customers or finance options will be eligible."
        },
        {
            num : 3,
            desc: "Price before estimated savings is $81,630, including Destination and Order Fees, but excluding taxes and other fees. Subject to change. Vehicle shown has upgrades that will increase the price. Estimated savings includes $6,500 in gas savings estimated over five years, the $7,500 Federal Tax Credit and state incentives, available to eligible buyers and subject to MSRP caps. Not all vehicles, customers or finance options will be eligible."
        },
        {
            num : 4,
            desc: "Price before estimated savings is $76,630, including Destination and Order Fees, but excluding taxes and other fees. Subject to change. Vehicle shown has upgrades that will increase the price. Estimated savings includes $6,500 in gas savings estimated over five years and state incentives, available to eligible buyers and subject to MSRP caps. Not all vehicles, customers or finance options will be eligible."
        }
    ]
  return (
    <div className='bg-black text-white'>
        <div className='w-[95%] md:w-[70%] lg:[48%] m-auto text-center p-6 py-10'>
            {paras.map((para) => <ParaCard key={para.id} para={para} />)}
        </div>
        <FooterList />
    </div>
  )
}

function ParaCard({para}){
    return <div className='text-[0.7rem] md:text-sm p-2'>
       <sup>{para.num}</sup> {para.desc} <span className='underline'>Terms Apply</span>
    </div>
}

function FooterList(){
    return <div className='w-[40%] m-auto flex justify-between pb-4 text-sm'>
        <a href="#">Tesla {new Date().getFullYear()}</a>
        <a href="#">Privacy & Legal</a>
        <a href="#">Vehicle Recalls</a>
        <a href="#">Contact</a>
        <a href="#">News</a>
        <a href="#">Get Updates</a>
        <a href="#">Locations</a>
    </div>
}

export default Footer