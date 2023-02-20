import React, { useState } from 'react'
import UseEffectOnlyOnceFunctional from './UseEffectOnlyOnceFunctional'

function EffectCleanUp() {

    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle</button>
            {display && <UseEffectOnlyOnceFunctional />}
        </div>
    )
}

export default EffectCleanUp