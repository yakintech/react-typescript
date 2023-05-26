import React, { useState } from 'react'

function StateType() {

    const [counter, setcounter] = useState<number>(0)


  return (<>
        <h1>{counter}</h1>
        <button onClick={() => setcounter(counter + 1)}>Increase</button>
  </>
  )
}

export default StateType