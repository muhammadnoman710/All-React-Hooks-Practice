import React from 'react'
import { useReducer } from 'react';

const InitialState = 0

const reducer = (state, action) => {
    //switch and action for both the counters
    switch (action) {
        case 'Increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'Reset':
            return InitialState
        default:
            return state
    }
}

function UseReducerMultipleReducers() {

    const [count, dispatch] = useReducer(reducer, InitialState)
    const [count2, dispatch2] = useReducer(reducer, InitialState)
    return (
        //you can use 2 useReducers to make 2 different counters that can be handle by same action inticement
        <div>
            <div><h3>Count - {count}</h3></div>
            <button onClick={() => dispatch('Increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}> decrement</button >
            <button onClick={() => dispatch('Reset')}> Reset</button >
            <div>
                <div><h3>Count - {count2}</h3></div>
                <button onClick={() => dispatch2('Increment')}>Increment</button>
                <button onClick={() => dispatch2('decrement')}> decrement</button >
                <button onClick={() => dispatch2('Reset')}> Reset</button >
            </div>
        </div>
    )
}
export default UseReducerMultipleReducers