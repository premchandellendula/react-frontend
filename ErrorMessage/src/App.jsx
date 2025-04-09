import { useState } from "react";

function App() {
  
  return (
    <>
      <ErrorMessageDisplayer />
    </>
  )
}

const ErrorMessageDisplayer = () => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Check if the input value is "hello"
    if (value === "hello") {
      setErrorMessage('Error: You cannot enter "hello".');
    } else {
      setErrorMessage(""); // Clear error message for any other input
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </div>
  );
};
export default App
