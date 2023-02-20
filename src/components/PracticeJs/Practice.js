import React from 'react'
import {useState , useEffect} from 'react';

function Practice() {

    const [isState , setIsState] = useState({})
    const [error, setError] = useState("")

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1').then((resolve) => {
        if(resolve.ok){
            setIsState(resolve.data)
            setError('')
        }
    })
    .catch((err) => {
        setError('WENT WRONG')
    })
} , [])

  return (
    <>
    {isState? isState.title: 'loading'}
    {error ? error : null}
    </>
  )
}

export default Practice