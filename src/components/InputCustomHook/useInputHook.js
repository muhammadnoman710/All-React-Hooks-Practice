import {useState} from 'react'

function useInputHook(InitialState) {
  const [value , setValue] = useState (InitialState)
  const reset = () => {
    setValue(InitialState)
  }
  const bind = {
    value,
    onChange : function (e) {
        setValue (e.target.value)
    }
  }
  return ([value , bind , reset]) 
}

export default useInputHook