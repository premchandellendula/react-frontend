import { useState } from "react"
import axios from 'axios'

function App() {

  const [preview, setPreview] = useState('');
  const handleFileSubmit = async (e) => {
    e.preventDefault();

    if(!preview) return;

    try{
      const res = await axios.post("http://localhost:3000/upload", {
        image_url: preview
      })

      console.log(res)
    }catch(err){
      console.log(err)
    }
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]

    var reader = new FileReader()
    reader.onloadend = () => {
      setPreview(reader.result);
    }
    reader.readAsDataURL(file);
  }

  return (
    <>
      <h1>Cloudinary test</h1>

      <input type="file" onChange={handleFileUpload} />
      <button onClick={handleFileSubmit}>Submit</button>

      <img src={preview} alt="" style={{width: "120px", height: "auto"}} />
    </>
  )
}

export default App
