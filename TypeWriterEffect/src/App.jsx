import MultiPleWordsLoop from "./components/MultiPleWordsLoop"
import SingleWord from "./components/SingleWord"
import SingleWordLoop from "./components/SingleWordLoop"

function App() {

  return (
    <div>
      <SingleWord text="Premchand." />
      {/* <SingleWordLoop text="Premchand." /> */}
      <MultiPleWordsLoop />
    </div>
  )
}

export default App
