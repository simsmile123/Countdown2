import { useState } from 'react'
import TriviaApp from "./components/TriviaApp";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TriviaApp />
    </>
  )
}

export default App
