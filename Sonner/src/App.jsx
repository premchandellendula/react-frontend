import { useState } from "react"
import { toast } from "sonner"

function App() {
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFetchData = () => {
    fetch("https://jsonplaceholder.typicde.com/posts/1")
      .then(res => res.json())
      .then(val => {
        setTitle(val.title);
        toast.success("Fetched successfully")
      })
      .catch(err => {
        toast.error(err.message);
      })
  }

  const handleDataSubmit = () => {
    // if(username !== "premchand" || password !== "1234abcd"){
    //   toast.error("Incorrect credentials")
    //   return;
    // }

    if(username !== "premchand"){
      toast.error("Incorrect username");
      return;
    }

    // if(password !== "1234abcd"){
    //   toast.error("Incorrect password");
    //   return;
    // }

    if(password.length < 6){
      toast.error("Password must be atleast 6 characters")
      return;
    }

    if(username === "premchand" && password === "1234abcd"){
      toast.success("Signin successful");
      return;
    }
  }

  return (
    <>
      <button onClick={() => toast.success('My first toast')}>
        Give me a toast
      </button>
      <button onClick={handleFetchData}>
        Fetch data
      </button>
      <div>
        {title}
      </div>

      <div>
        <input type="text" placeholder="premchand" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="1234abcd" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleDataSubmit}>submit</button>
      </div>
    </>
  )
}

export default App
