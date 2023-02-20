import React from 'react'

const ChildRefFor = React.forwardRef((props, ref) => {

    const timeout = setTimeout(() => {
        console.log('The component is rendering')
    }, 5000)
    console.log(timeout)
    console.log('log1')
    console.log('log2')

    clearTimeout(timeout)

    return (
        <div>
            <input type="text" ref={ref}></input>
            {timeout}
        </div>
    )
})

export default ChildRefFor