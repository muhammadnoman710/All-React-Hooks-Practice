import React from 'react'
import { useReducer } from 'react';

const InitialState = {
    firstCounter: 0,
    secondCounter: 10

}
const reducer = (state, action) => {
    switch (action.type) {
        case 'Increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'Increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'Reset':
            return InitialState
        default:
            return state
    }
}

function UseReducer1() {

    const [count, dispatch] = useReducer(reducer, InitialState)
    return (
        <div>
            <h3>Count - {count.firstCounter}</h3>
            <h3>Count - {count.secondCounter}</h3>
            <button onClick={() => dispatch({ type: 'Increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 3 })}> decrement</button >
            <button onClick={() => dispatch({ type: 'Increment2', value: 1 })}>Increment2</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 3 })}> decrement2</button >
            <button onClick={() => dispatch({ type: 'Reset' })}> Reset</button >
        </div >
    )
}
export default UseReducer1