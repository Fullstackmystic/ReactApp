import React from "react";

class  Button extends React.Component{
    constructor(){
        super();
        this.state={
            list:''
        }
    }
    Add=()=>{
            this.setState({
                list:'Works'
            }    
        )
    }
    render(){
        return(
            <div id="container">
                <button id="btn" onClick={this.Add}>CLick</button>
                <div>{this.state.list}</div>
            </div>
        )
    }
}

export default Button;