import React from "react";

import './Counter.css'

class Counter extends React.Component{
    constructor(){
        super();

        this.state = {
            count : 0
        }

    }

    render(){
        return(<>
        <div className="container">
            <h1>
                Hello world!....
            </h1>
            <h2>
                Class base components.....
            </h2>
            <p>
                {this.state.count}
            </p>
            <div className="buttons">
                <button onClick={() => this.setState({ count : this.state.count + 1})}>
                    Incriment : +
                </button>
                
                <button onClick={() => this.setState({ count : this.state.count - 1})}>
                    Decriment : -
                </button>
            </div>
        </div>
         
        </>
        )
    }
}

export default Counter;