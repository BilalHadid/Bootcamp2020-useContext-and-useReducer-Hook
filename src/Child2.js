import React, { useReducer } from 'react'
import {countReducer } from './Reducer/countReducer'

const Child2 = () => {
    let [state, dispatch] = useReducer(countReducer, 1)
    return(
        <div>
            <hr />
            <h1>This is Second Child using Counter Reducer</h1>
            <h2>Your value is : {state}</h2>
            <button onClick={() => dispatch('INCREMENT')}>Increment Reducer</button>
        </div>
    )
}
export default Child2