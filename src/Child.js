import React, { useContext } from 'react'
import counterContext from './Countercontext'

const Child = () => {
    let counterValue = useContext(counterContext)
    return(
        
        <div>
            <h1>This is first child using Counter context</h1>
            <h2>it counter value {counterValue[0]}</h2>
            <button onClick={() => counterValue[1](++counterValue[0])}>Increment</button>
        </div>
    )
}
export default Child