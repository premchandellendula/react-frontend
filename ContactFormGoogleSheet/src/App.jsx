

function App() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const formEle = document.querySelector('form');

    const formData = new FormData(formEle);

    fetch("https://script.google.com/macros/s/AKfycbzGzSt1OgjydLyI09oTMpMR30yUtOq1GkszeVBCGA3DfMwhx9JBBnGumOJT5WhiqGcg/exec", {
      method: "POST",
      body: formData
    })

    // console.log('Submitted')
  }

  return (
    <>
      <h1>Contact form</h1>

      <form onSubmit={(e) =>handleSubmit(e)}>
        <input type="text" placeholder='name' name="Name" />
        <input type="email" placeholder='email' name="Email"/>
        <input type="number" placeholder='phone' name="Phone"/>
        <input type="text" placeholder='message' name="Message"/>
        <input type="submit"/>
      </form>
    </>
  )
}

export default App
