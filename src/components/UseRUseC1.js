import React, { useContext } from 'react'
import { MyContext } from '../App'


function UseRUseC1() {

    const auth = useContext(MyContext)
    return (
        <div>
            UseRUseC1
            <h4>Count -- {auth.setCount}</h4>
            <button onClick={() => auth.setDispatch('Increment')}>Increment</button>
            <button onClick={() => auth.setDispatch('decrement')}> decrement</button >
            <button onClick={() => auth.setDispatch('Reset')}> Reset</button >
        </div>
    )
}

export default UseRUseC1