import React, { useContext } from 'react'
import { MyContext } from '../App'


function UseRUseC6() {

    const auth = useContext(MyContext)
    return (
        <div>
            UseRUseC6
            <h4>Count -- {auth.setCount}</h4>
            <button onClick={() => auth.setDispatch('Increment')}>Increment</button>
            <button onClick={() => auth.setDispatch('decrement')}> decrement</button >
            <button onClick={() => auth.setDispatch('Reset')}> Reset</button >
        </div>
    )
}

export default UseRUseC6