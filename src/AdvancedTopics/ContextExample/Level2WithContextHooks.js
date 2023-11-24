import React from 'react'
import { useContext } from 'react'
import { MyCustomContext} from './ContextExample'
import { NileshContext } from './ContextEample2';


function Level2WithContextHooks() {
    const valFromCustomContext = useContext(MyCustomContext);
    const valueFromNileshContext = useContext(NileshContext);
  return (
    <div>
        <p>{`With Hooks --> The value from MyCustomContext is ${valFromCustomContext}`}</p>
        <p>{`With Hooks --> The value from MyCustomContext is ${valueFromNileshContext}`}</p>
    </div>
  )
}

export default Level2WithContextHooks