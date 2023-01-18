import React from "react";
import UpdateCom from "./HOC";

class HoverCounter extends React.Component{

    render(){
        const {count, incrementd, decrimentd} = this.props;

        return(
            <>
                <h1 onMouseEnter={incrementd} onMouseOver={decrimentd}>
                    Hover {count} Time
                </h1>
            </>
        )
    }
}

export default UpdateCom(HoverCounter);