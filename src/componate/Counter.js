import React from "react";

import './Counter.css'

class Counter extends React.Component{
    constructor(){
        super();

        this.state = {
            count : 0
        }
    }
    increment() {
        this.setState(() => {
            return{
                count : this.state.count + 1
            }
        })
    }
    decriment() {
        if (this.state.count > 0) {
            this.setState({
                count : this.state.count - 1
            })
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
                <button onClick={() => {this.increment()}}>
                    Incriment : +
                </button>
                
                <button onClick={() => {this.decriment()}}>
                    Decriment : -
                </button>
            </div>
        </div>
         
        </>
        )
    }
}

export default Counter;