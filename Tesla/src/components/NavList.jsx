// import React, { act, useState } from 'react'
// import DropDown from './DropDown';
// import DropDownVehicles from './dropdown/DropDownVehicles';
// import DropDownEnergy from './dropdown/DropDownEnergy';
// import DropDownCharging from './dropdown/DropDownCharging';
// import DropDownDiscover from './dropdown/DropDownDiscovery';
// import DropDownShop from './dropdown/DropDownShop';

// const NavList = () => {
//     const [activeDropDown, setActiveDropDown] = useState(null);
//     const [isHovering, setIsHovering ] = useState(false);

//     const handleMouseEnter = (dropdown) => {
//         setActiveDropDown(dropdown);
//         setDropDownVisible(true)
//         setIsHovering(true);
//     }

//     const handleMouseLeave = () => {
//         setIsHovering(false);
//         setTimeout(() => {
//             if(!isHovering){
//                 setActiveDropDown(null);
//                 setDropDownVisible(false)
//             }
//         }, 200)
//     }

//     const handleDropDownMouseEnter = () => {
//         setIsHovering(true);
//     }

//     const handleDropDownMouseLeave = () => {
//         setIsHovering(false);
//         setTimeout(() => {
//             if(!isHovering){
//                 setActiveDropDown(null);
//                 setDropDownVisible(false);
//             }
//         }, 200);
//     }
//   return (
//     <div className="flex flex-col justify-center">
//         <ul className="flex justify-between">
//             <div onMouseEnter={() => handleMouseEnter('vehicles')} onMouseLeave={handleMouseLeave}>
//                 <li className="px-5 text-[0.9rem] ease-in font-medium">Vehicles</li>
//                 {activeDropDown === 'vehicles' && <DropDownVehicles onMouseEnter={handleDropDownMouseEnter} onMouseLeave={handleDropDownMouseLeave} /> }
//             </div>

//             <div onMouseEnter={() => handleMouseEnter('energy')} onMouseLeave={handleMouseLeave}>
//                 <li className="px-5 text-[0.9rem] ease-in font-medium">Energy</li>
//                 {activeDropDown === 'energy' && <DropDownEnergy onMouseEnter={handleDropDownMouseEnter} onMouseLeave={handleDropDownMouseLeave} /> }
//             </div>

//             <div onMouseEnter={() => handleMouseEnter('charging')} onMouseLeave={handleMouseLeave}>
//                 <li className="px-5 text-[0.9rem] ease-in font-medium">Charging</li>
//                 {activeDropDown === 'charging' && <DropDownCharging onMouseEnter={handleDropDownMouseEnter} onMouseLeave={handleDropDownMouseLeave} /> }
//             </div>

//             <div onMouseEnter={() => handleMouseEnter('discover')} onMouseLeave={handleMouseLeave}>
//                 <li className="px-5 text-[0.9rem] ease-in font-medium">Discover</li>
//                 {activeDropDown === 'discover' && <DropDownDiscover onMouseEnter={handleDropDownMouseEnter} onMouseLeave={handleDropDownMouseLeave} /> }
//             </div>

//             <div onMouseEnter={() => handleMouseEnter('shop')} onMouseLeave={handleMouseLeave}>
//                 <li className="px-5 text-[0.9rem] ease-in font-medium">Shop</li>
//                 {activeDropDown === 'shop' && <DropDownShop onMouseEnter={handleDropDownMouseEnter} onMouseLeave={handleDropDownMouseLeave} /> }
//             </div>

//         </ul>
//     </div>
//   )
// }

// export default NavList


import React from 'react'
import FlyoutLink from './FlyoutLink'
import DropDownVehicles from './DropDown/DropDownVehicles'
import DropDownEnergy from './DropDown/DropDownEnergy'
import DropDownCharging from './DropDown/DropDownCharging'
import DropDownDiscover from './DropDown/DropDownDiscovery'
import DropDownShop from './DropDown/DropDownShop'

const NavList = () => {
  return (
    <div className="flex flex-col justify-center">
        <ul className="flex justify-between">
            <FlyoutLink href="#" FlyoutContent={DropDownVehicles}>
                Vehicles
            </FlyoutLink>

            <FlyoutLink href="#" FlyoutContent={DropDownEnergy}>
                Enegry
            </FlyoutLink>

            <FlyoutLink href="#" FlyoutContent={DropDownCharging}>
                Charging
            </FlyoutLink>

            <FlyoutLink href="#" FlyoutContent={DropDownDiscover}>
                Discover
            </FlyoutLink>

            <FlyoutLink href="#" FlyoutContent={DropDownShop}>
                Shop
            </FlyoutLink>
        </ul>
    </div>
  )
}

  

export default NavList