import React, { useState, useEffect } from 'react'

function EffectHook2() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log("use-effect--Updating the title")
        document.title = `You Clicked ${count} times`;
    }, [count])

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Click {count}</button>
        </div>
    )
}

export default EffectHook2