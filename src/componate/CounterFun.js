import React, { useState } from "react";
import './Counter.css'

function CounterFun() {

    const [name, setName] = useState("Rahul")
    const [count, setCount] = useState(0)

    let increment = () => {

        setCount((prevState) => {
            return (prevState + 1);
        })
    }

    let decriment = () => {

        setCount((prevState) => {
            if (prevState > 0) {
                return (prevState - 1);
            } else {
                return 0;
            }
        })
    }

    let changeName = () => {
        setName((prevState) => {
            return prevState = 'Raj';
        })
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <h1>
                        Class Base Component........!
                    </h1>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h2>
                        {name} Event {count} Time
                    </h2>
                    <br/>
                    <br/>

                    <div className="buttons">
                        <button onClick={() => { increment() }}>
                            Incriment : +
                        </button>

                        <button onClick={() => { decriment() }}>
                            Decriment : -
                        </button>

                        <button onClick={() => { changeName() }}>
                            Click
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CounterFun;