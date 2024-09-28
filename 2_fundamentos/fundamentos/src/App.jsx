import { useState } from 'react'
// components
import FirstComponent from './components/FirstComponent'
import ButtonTestCreate from './components/ButtonTestCreate'
import Challenge from './components/Challenge'

// css
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Fundamentos</h1>
      <FirstComponent />
      <ButtonTestCreate />
      <Challenge />
    </>
  )
}

export default App
