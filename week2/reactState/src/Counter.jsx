import React, { useState,useEffect } from 'react'
export default ({initialValue,incrementValue}) => {

    //const [count, setCount] = useState(initialValue || 0)
    const[count,setCount] = useState(() => {
        const savedCount = localStorage.getItem('count')
        return savedCount ? Number(savedCount) : initialValue
    })
/*
    useEffect(() => {
        const savedCount = localStorage.getItem('count')
        setCount(savedCount ? parseInt(savedCount) : count)
    },[])
*/
    useEffect(() => {
        localStorage.setItem('count', count)
    }, [count])

    
    return (
      <>
        <h1>Counter</h1>
        <p>{count}</p>
        <button onClick={() => setCount(count + incrementValue)}>Increment</button>
        <button onClick={() => setCount(count - incrementValue)}>Decrement</button>
      </>
    )
  }