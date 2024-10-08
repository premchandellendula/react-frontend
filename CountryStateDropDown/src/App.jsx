import { useState, useEffect } from 'react'
import Select from "react-select";
import axios from 'axios'

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});
  const [state, setState] = useState('')

  useEffect(() => {
    axios.get('https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code')
      .then(res => {
        setCountries(res.data.countries)
        setSelectedCountry(res.data.userSelectValue)
      })
  }, [])
  
  return (
    <div className='flex justify-center items-center bg-gray-300 h-screen'>
      <div className="gap-6">
        <div>
          <label for="inputState">Country</label>
          <Select
            options={countries}
            value={selectedCountry}
            styles={{border: '1px solid violet'}}
            onChange={(selectedOption) => setSelectedCountry(selectedOption)}
          />
        </div>
        <div className="flex flex-col">
          <label for="inputState">State</label>
          <div class="relative">
            <select class="block w-full px-2 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:border-blue-600 focus:border-2" onChange={(e) => setState(e.target.value)} value={state}>
              <option value="SelectState">Select State</option>
              <option value="Andra Pradesh">Andra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madya Pradesh">Madya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Orissa">Orissa</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttaranchal">Uttaranchal</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="West Bengal">West Bengal</option>
              <option disabled className="bg-gray-600 text-white">UNION Territories</option>
              <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Lakshadeep">Lakshadeep</option>
              <option value="Pondicherry">Pondicherry</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <div class="border-l-2 border-gray-300 h-5 mr-3"></div>
              <svg class="w-4 h-4 mr-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p>Country: {selectedCountry.label}</p>
        <p>State: {state}</p>
      </div>
    </div>
  )
}

export default App

