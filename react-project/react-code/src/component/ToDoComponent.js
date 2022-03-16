import React from "react";

class ToDoComponent extends React.Component
{
    constructor()
    {
        super();
        this.state =
        {
            id:1,
            value:"demo"
        };
    }
    render()
    {
        return(
            <div>       
                <h1>Class component demo</h1>
                <p>Hello {this.props.value}!</p>
                <p>Id id : {this.state.id}and the value : {this.state.value}</p>
                <button onClick={'this.newfuc'}>Click</button>
            </div>
        )
    }
}


newfuc =() =>
{
    console.log("This is function");
    this.setState({value:"New Value"});
};


export {ToDoComponent};