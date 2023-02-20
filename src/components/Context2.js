import React from 'react'
import { useContext } from 'react';
//Using UseContextHook

import { DContext, MyContext } from '../App'

function Context2() {

    const user = useContext(DContext)
    const author = useContext(MyContext)

    return (
        <div>
            {user} --- {author}
        </div>
    )
}

export default Context2