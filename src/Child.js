import React, { useContext } from 'react'
import counterContext from './Countercontext'

const Child = () => {
    let counterValue = useContext(counterContext)
    return(
        
        <div>
            <h1>This is first child</h1>
            <h2></h2>
        </div>
    )
}
export default Child