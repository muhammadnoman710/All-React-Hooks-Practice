import React, { useState, useEffect } from 'react'

function UseEffectOnlyOnceFunctional() {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const mousePosition = e => {
    console.log("mouse event")
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('UseEffectOnlyOnceFunctional')
    window.addEventListener("mousemove", mousePosition)
    return () => {
      console.log("mouse event")
      window.removeEventListener("mousemove", mousePosition)
    }

  }, []

  )

  return (
    <div>
      Hooks x-{x} y-{y}
    </div>
  )
}


export default UseEffectOnlyOnceFunctional