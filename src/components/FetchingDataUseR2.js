import React from 'react'
import { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
    loading: true,
    post: {},
    error: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'Fetch_Success':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'Fetch_Failed':
            return {
                loading: false,
                post: {},
                error: "Something Went WRONG"
            }
        default:
            return state
    }
}
function FetchingDataUseR2() {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                dispatch({ type: 'Fetch_Success', payload: res.data })
            })
            .catch(error => {
                dispatch({ type: 'Fetch_Failed' })
            })
    }, [])
    return (
        <div>
            {state.loading ? 'Loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default FetchingDataUseR2