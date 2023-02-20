import React, { useState, useCallback } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function Parent() {

    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(1000)

    const incrementAge = useCallback(() => {
        setAge(age + 5)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])
    return (
        <div>
            <Title />
            <Count text="Age" count={age} />
            <Button handleClick={incrementAge}>increment Age</Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={incrementSalary}>increment Salary</Button>
        </div>
    )
}
export default Parent