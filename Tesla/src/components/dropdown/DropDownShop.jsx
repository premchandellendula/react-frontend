import React from 'react'
import chargerImg from '../../assets/images/asset 13.jpeg'
import accessoriesImg from '../../assets/images/asset 14.jpeg'
import apparelImg from '../../assets/images/asset 15.png'
import lifestyleImg from '../../assets/images/asset 16.jpeg'

const DropDownShop = () => {
    const shopsy = [
        {
            title : "Chargin",
            img : chargerImg
        },
        {
            title : "Accessories",
            img : accessoriesImg
        },
        {
            title : "Apparel",
            img : apparelImg
        },
        {
            title : "Lifestyle",
            img : lifestyleImg
        }
    ]
  return (
    <div className='w-[600px] bg-white py-12 shadow-xl'>
        <div className='flex justify-center'>
            <div className='grid grid-cols-2 gap-3'>
                {shopsy.map((shop) => <ItemCard key={shop.id} shop={shop} />)}
            </div>
        </div>
    </div>
  )
}

function ItemCard({shop}){
    return <div className='flex flex-col'>
        <img src={shop.img} alt="" className='w-[200px] m-auto my-2' />
        <h3 className='text-center text-xl font-medium'>{shop.title}</h3>
    </div>
}

export default DropDownShop