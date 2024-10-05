import { useState } from "react"

function App() {

  const [flat, setFlat] = useState('Hello')

  return (
    <div>
      <AddressInput label={"Address line 1"} value={flat} onChange={(e) => setFlat(e.target.value)} />
    </div>
  )
}

function AddressInput({label, value, onChange}){
  return <div>
    <div className='text-base text-left font-medium py-2'>
      {label}
    </div>
    <input onChange={onChange}  type="text" value={value} className='bg-blue-50 w-full h-10 px-2 py-1 border rounded border-slate-200 focus:ring-2 focus:ring-violet-300 focus:outline-none' />
  </div>
}

export default App
