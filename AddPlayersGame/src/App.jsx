// import React, { useState } from 'react';
// import { RecoilRoot, atom, useRecoilState } from 'recoil';

// // Recoil Atom to store players
// const playersAtom = atom({
//   key: 'playersAtom',
//   default: [],
// });

// // Button Component
// const Button = ({ onClick, children, variant = 'default' }) => {
//   const baseClasses = "px-4 py-2 rounded-md text-white font-semibold transition duration-200";
//   const variants = {
//     default: "bg-blue-500 hover:bg-blue-600",
//     outline: "bg-red-400 text-black hover:bg-red-500 hover:text-white",
//     destructive: "bg-red-500 hover:bg-red-600",
//   };

//   return (
//     <button
//       onClick={onClick}
//       className={`${baseClasses} ${variants[variant] || variants.default}`}
//     >
//       {children}
//     </button>
//   );
// };

// function PlayerManager() {
//   const [players, setPlayers] = useRecoilState(playersAtom);
//   const [playerName, setPlayerName] = useState('');

//   const addPlayer = () => {
//     if (playerName.trim() !== '') {
//       setPlayers([...players, playerName]);
//       setPlayerName('');
//     }
//   };

//   const removePlayer = (index) => {
//     const updatedPlayers = players.filter((_, i) => i !== index);
//     setPlayers(updatedPlayers);
//   };

//   const clearPlayers = () => {
//     setPlayers([]);
//   };

//   const selectRandomPlayer = () => {
//     if (players.length > 0) {
//       const randomIndex = Math.floor(Math.random() * players.length);
//       alert(`Randomly Selected Player: ${players[randomIndex]}`);
//     } else {
//       alert('No players available to select!');
//     }
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <div className="mb-4 border rounded-md shadow-md p-4">
//         <h1 className="text-xl font-bold mb-2">Player Manager</h1>
//         <div className="flex gap-2 mb-4">
//           <input
//             type="text"
//             value={playerName}
//             onChange={(e) => setPlayerName(e.target.value)}
//             placeholder="Enter player name"
//             className="w-full p-2 border rounded-md"
//           />
//           <Button onClick={addPlayer}>Add</Button>
//         </div>
//         <ul className="mb-4">
//           {players.map((player, index) => (
//             <li
//               key={index}
//               className="flex justify-between items-center py-2 border-b"
//             >
//               <span>{player}</span>
//               <Button variant="outline" onClick={() => removePlayer(index)}>
//                 Remove
//               </Button>
//             </li>
//           ))}
//         </ul>
//         <div className="flex gap-2">
//           <Button variant="destructive" onClick={clearPlayers}>
//             Clear All
//           </Button>
//           <Button onClick={selectRandomPlayer}>Select Random</Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <RecoilRoot>
//       <PlayerManager />
//     </RecoilRoot>
//   );
// }


// import React, { useState } from 'react';

// // Button Component
// const Button = ({ onClick, children }) => {
//   return (
//     <button
//       onClick={onClick}
//       className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
//     >
//       {children}
//     </button>
//   );
// };

// function BoxSpinner() {
//   const [activeBox, setActiveBox] = useState(null);
//   const [spinning, setSpinning] = useState(false);

//   const spin = () => {
//     if (spinning) return; // Prevent multiple spins at once

//     setSpinning(true);
//     let currentIndex = 0;

//     const interval = setInterval(() => {
//       setActiveBox(currentIndex);
//       currentIndex = (currentIndex + 1) % 9; // Cycle through 0 to 8
//     }, 200);

//     setTimeout(() => {
//       clearInterval(interval);
//       const finalBox = Math.floor(Math.random() * 9);
//       setActiveBox(finalBox);
//       setSpinning(false);
//     }, 5000); // Stop after 5 seconds
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto text-center">
//       <h1 className="text-xl font-bold mb-4">Box Spinner</h1>
//       <div className="grid grid-cols-3 gap-4 mb-4">
//         {Array.from({ length: 9 }).map((_, index) => (
//           <div
//             key={index}
//             className={`w-20 h-20 flex items-center justify-center border-4 rounded-md transition duration-200 ${
//               activeBox === index ? 'border-blue-500' : 'border-gray-300'
//             }`}
//           >
//             {index + 1}
//           </div>
//         ))}
//       </div>
//       <Button onClick={spin}>Spin</Button>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <BoxSpinner />
//   );
// }






import React, { useState } from 'react';

// Button Component
const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
    >
      {children}
    </button>
  );
};

function BoxSpinner() {
  const [activeBox, setActiveBox] = useState(null);
  const [spinning, setSpinning] = useState(false);

  const spin = () => {
    if (spinning) return; // Prevent multiple spins at once

    setSpinning(true);

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 9); // Pick a random box
      setActiveBox(randomIndex);
    }, 200);

    setTimeout(() => {
      clearInterval(interval);
      const finalBox = Math.floor(Math.random() * 9); // Final random box
      setActiveBox(finalBox);
      setSpinning(false);
    }, 5000); // Stop after 5 seconds
  };

  return (
    <div className="p-4 max-w-md mx-auto text-center">
      <h1 className="text-xl font-bold mb-4">Box Spinner</h1>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className={`w-20 h-20 flex items-center justify-center border-4 rounded-md transition duration-200 ${
              activeBox === index ? 'border-blue-500' : 'border-gray-300'
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <Button onClick={spin}>Spin</Button>
    </div>
  );
}

export default function App() {
  return (
    <BoxSpinner />
  );
}
