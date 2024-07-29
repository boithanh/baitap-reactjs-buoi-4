import { useState } from 'react'
import ShoesStore from './components/ShoesStore'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShoesStore />
    </>
  )
}

export default App
