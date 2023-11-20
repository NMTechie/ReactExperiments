import React from 'react'
import Level2Component from './Level2Component'

function Level1Component() {
  return (
    <div>
        <Level2Component/>
        <p>With Dual Context</p>
    </div>
  )
}

export default Level1Component