import React,{useState} from 'react'
import useCustomHook from './CustomHook'

function Counter1() {

const [count , setCount] = useState(0)
useCustomHook(count)

  return (
    <div>
        <button onClick={()=>{setCount(count+1)}}>Count = {count}</button>
    </div>
  )
}

export default Counter1