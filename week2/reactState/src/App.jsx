import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import ListDemo from './ListDemo'
function App() {

  return (
    <>
    <ListDemo />
    <Counter initialValue={5} incrementValue={5} />
    </>
  )
}

export default App
