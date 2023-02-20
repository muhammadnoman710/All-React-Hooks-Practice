import React, { useState, useMemo } from 'react'

function UseMemoHook() {

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const Increment1 = () => {
        setCount1(count1 + 1)
    }
    const isEven = useMemo(() => {
        let i = 0
        while (i < 200000000) i++
        return count1 % 2 === 0
    }, [count1])

    const Increment2 = () => {
        setCount2(count2 + 1)
    }

    return (
        <div>
            <div>
                Count1
                <button onClick={Increment1}>{count1}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                Count2
                <button onClick={Increment2}>{count2}</button>
            </div>
        </div>
    )
}

export default UseMemoHook