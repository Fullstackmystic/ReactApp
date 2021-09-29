import React from "react";

class  Button extends React.Component{
    constructor(){
        super();
        this.state={
            list:''
        }
    }
    Add=()=>{
        const item=document.querySelector('input').value
            this.setState({
                list:item
            }    
        )
    }
    render(){
        return(
            <div id="container">
                <input type="text"></input>
                <button id="btn" onClick={this.Add}>Click</button>
                <div>{this.state.list}</div>
            </div>
        )
    }
}

export default Button;
