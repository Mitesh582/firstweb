import React from "react";
import './Counter.css'
import UpdateCom from "./HOC";

class Counter extends React.Component{


    render(){
        const {count, incrementd, decrimentd} = this.props;

        return(<>
        <div className="container">
            <h1>
                Hello world!....
            </h1>
            <h2>
                Class base components.....
            </h2>
            <p>
                {count}
            </p>
            <div className="buttons">
                <button onClick={incrementd}>
                    Incriment : +
                </button>
                
                <button onClick={decrimentd}>
                    Decriment : -
                </button>
            </div>
        </div>
         
        </>
        )
    }
}

export default UpdateCom(Counter);