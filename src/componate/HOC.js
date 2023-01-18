import React from "react";

function UpdateCom (OrignalCom){

    class NewCom extends React.Component{

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
    
            return(
                <>
                    <OrignalCom count={this.state.count} incrementd={() => {this.increment()}} decrimentd={() => {this.decriment()}} />
                </>
            )
        }
    }

    return NewCom;

}

export default UpdateCom;

