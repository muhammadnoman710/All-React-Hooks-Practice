import React, { useEffect, useRef } from 'react'


function UseRef() {
    const MyRef = useRef(null)
    useEffect(() => {
        // we will gonna focus on the input bar
        MyRef.current.focus()
    }, [])

    return (
        <div><form>
            <input ref={MyRef} type='/text'></input>
        </form>
        </div>
    )
}

export default UseRef