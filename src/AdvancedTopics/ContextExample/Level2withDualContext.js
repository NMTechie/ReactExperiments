import React from 'react'
import { MyCustomContextConsumer } from './ContextExample'
import { NileshContextConsumer } from './ContextEample2';

function Level2withDualContext() {
  return (
    <MyCustomContextConsumer>
      {
        (valueFromMyCustomContext)=>{
          return (
            <NileshContextConsumer>
              {
                (valueFromNileshContext)=>{
                  return(
                    <div>
                      <p>{`Value from MyCustomContext is ${valueFromMyCustomContext}`}</p>
                      <p>{`Value from NileshContext is ${valueFromNileshContext}`}</p>
                    </div>
                  )
                }
              }
            </NileshContextConsumer>
          )
        }
      }
    </MyCustomContextConsumer>
  );
}

export default Level2withDualContext