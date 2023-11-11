import React from 'react'

function ChildComponent(props) {
    if(props.valueFromParent.length > 10)
    {
        throw new Error('Parameter length is too big!');
    }
  return (
    <div>
        <p> {props.valueFromParent} </p>
    </div>
  )
}

export default ChildComponent