import React, { useState } from 'react'

function HookCounter() {

    const [count, setCount] = useState(0)
    const Increment5 = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }


    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count{count}</button>
            <button onClick={Increment5}>Increment 5</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>decrement</button>
        </div>
    )
}

export default HookCounter
