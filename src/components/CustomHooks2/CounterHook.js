import {useState} from 'react'

function useCounterHook(InitialState , value) {
    const [count , setCount] = useState(InitialState , value)
    const Increment = () => {
         setCount (param => param + value)
    }
    const decrement = () => {
        setCount (param => param - value)
    }
    const Reset = () => {
        setCount(0)
    }
    return ({count , Increment , decrement , Reset})
    
}

export default useCounterHook