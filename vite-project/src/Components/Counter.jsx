import { Component } from "react";

export default class Counter extends Component {

    constructor(){
        super();

        this.state = {
            counter : 0
        }
    }

    handleClick = (value) => {
        this.setState({
            counter : this.state.counter + value
        })
    }

    handleReset = () =>  {
        this.setState ({
            counter : 0
        })
    }

    render(){
        return(
            <>
                <h1>Counter using Class : { this.state.counter }</h1>
                <button onClick={ () => this.handleClick(1)}> + (Increase)</button>
                <button onClick={ () => this.handleClick(-1)}> - (Decrease)</button>
                <button onClick={ () => this.handleReset()}> + Reset </button>


            </>
        )
    }

}