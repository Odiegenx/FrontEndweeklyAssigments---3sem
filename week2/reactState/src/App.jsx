import { useState } from 'react'
import './App.css'
import Counter from './Counter'
function App() {

  return (
    <>
    <Counter initialValue={5} incrementValue={5} />
    </>
  )
}

export default App
