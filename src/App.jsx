import { useState } from 'react'
import './App.css'
import ListaNombres from './components/ListaNombres'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <ListaNombres/>
    </>
  )
}

export default App
