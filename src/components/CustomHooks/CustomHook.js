import {useEffect} from 'react'

function useCustomHook(count) {
    useEffect(()=>{
        document.title = `Count ${count}`
        },[count])
}

export default useCustomHook