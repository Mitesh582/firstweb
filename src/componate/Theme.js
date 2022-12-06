import React from "react";
import './Theme.css';

class Theme extends React.Component{
    constructor(){
        super();


        this.state = {
            backgroundcolor : "red",
            color : "white"
        }
    }

    color = () => {
        this.setState({
            backgroundcolor : "blue",
            color : "black"

        })
      }

      color1 = () => {
        this.setState({
            backgroundcolor : "yellow",
            color : "red"

        })
      }

      color2 = () => {
        this.setState({
            backgroundcolor : "green",
            color : "white"

        })
      }


    render(){
        return(<>
            <div className="container" style={{backgroundColor: this.state.backgroundcolor}}>
                <div className="row">
                    <div className="details">
                        <h1>Class Base Components.........!</h1>
                        <br></br>
                        <hr></hr>
                        <br></br>
                        <p style={{color: this.state.color}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        <br></br>
                        <br></br>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum", written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum.
                        <br></br>
                        <br></br>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                        </p>
                        <div className="buttons">
                        <button onClick={() => {this.color()}}>Blue</button>
                        <button onClick={() => {this.color1()}}>Yellow</button>
                        <button onClick={() => {this.color2()}}>Green</button>
                        </div>
                    </div>  
                </div>
            </div>

        </>)
    }
}

export default Theme;