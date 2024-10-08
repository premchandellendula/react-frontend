import React, { useState } from 'react'
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';

import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

function App() {
  const [phone, setPhone] = useState('');

    const handlePhoneChange = (value) => {
        setPhone(value);
    };

  return (
    <div>
      <h3 className="text-xl mb-4">Enter your Phone Number</h3>
      <div className='flex justify-end gap-8 items-center border border-red-400'>
          <PhoneInput
            defaultCountry="in"
            value={phone}
            onChange={(phone) => setPhone(phone)}
            className='focus:ring-2 focus:ring-violet-300 focus:outline-none'
            />
          <div className="">
              <button className="text-white bg-violet-600 hover:bg-violet-800 focus:outline-none font-medium rounded-lg text-base px-8 py-2.5">
                  Submit
              </button>
          </div>
      </div>

      <div className='p-5'>{phone}</div>
    </div>
  )
}

export default App
