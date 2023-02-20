import React from 'react'
import useInputHook from './useInputHook'

function Input() {

const [firstnameValue , bindFirstname , resetFirstName] = useInputHook('')
const [lastnameValue , bindLastname, resetLastName] = useInputHook('')

const Submit = (e) => {
e.preventDefault();
alert(`${firstnameValue} ${lastnameValue}`)
resetFirstName()
resetLastName()
}

  return (
    <div>
        <form onSubmit={Submit}> 
            <input type='text' placeholder='Firstname' value={firstnameValue} {...bindFirstname}/>
            <input type='text' placeholder='Lastname' value={lastnameValue}  {...bindLastname}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Input