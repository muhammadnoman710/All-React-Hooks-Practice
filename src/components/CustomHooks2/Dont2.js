import React from 'react'
import useCounterHook from './CounterHook'

function Dont2() {
const {count , Increment , decrement , Reset} = useCounterHook(10 , 2)
  return (
    <div>
<h1>{count}</h1>
<button onClick={Increment}>Increment</button>
<button onClick={decrement}>decrement</button>
<button onClick={Reset}>Reset</button>
    </div>
  )
}

export default Dont2