import React, { useReducer } from 'react'

const InitialValue = {
    count: 0
}

const reducer = (state, action) => {
    console.log("Reducer", action);

    switch (action.type) {
        case "Inc":
            state = {
                count: state.count + 1
            }
            return state
            // break;
        case "Dsc":
            state = {
                count: state.count - 1      
            }
            return state
            // break;
        default:
            return state
    }

}


function Reducer() {
    const [state, dispatch] = useReducer(reducer, InitialValue)

    const handleClick = (ty) => {
        dispatch({ type: ty })
    }

    return (
        <>
            <h1>
                {
                    state.count
                }
            </h1>
            <button onClick={() => handleClick("Inc")}>
                Increment
            </button>
            <button onClick={() => handleClick("Dsc")}>
                Decrement
            </button>
        </>
    )
}

export default Reducer