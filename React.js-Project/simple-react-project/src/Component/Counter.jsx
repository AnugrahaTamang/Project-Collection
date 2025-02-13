import React, { useState } from 'react'

const Counter = () => {
    const [count, setcount] = useState(0)
  return (
    <div>
        <h1>Simple Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={() => setcount(count+1)}>Increment</button>
        <button onClick={() => setcount(count-1)}>Decrement</button>
    </div>
  )
}

export default Counter