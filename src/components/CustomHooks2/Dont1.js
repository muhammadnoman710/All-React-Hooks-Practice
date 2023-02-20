import React, {useState} from 'react'

function Count() {

    const [count , setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
        <button onClick={() => {setCount(count => count + 1)}}>Increment</button>
        <button onClick={() => {setCount(param => param - 1)}}>Decrement</button>
        <button onClick={() => {setCount(0)}}>Reset</button>
    </div>
  )
}

//The onClick Function at lines 9,10,11 are one liner arrow function, which I have studied during JavaScript 

export default Count