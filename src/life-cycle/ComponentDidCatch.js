import React, { Component } from "react";
import ErrorButton from "../components/ErrorThrowingButton";

class ComponentDidCatch extends Component {
  state = {
    hasError: false,
    errorMsg: ''
  }

  componentDidCatch(error, errorInfo) {
    console.log("componentDidCatch")
    console.log({ error, errorInfo })
    this.setState({ 
      hasError: true, 
      erroMsg: error.toString 
    })
  }

  render() {
    if(this.state.hasError){
      return (
        <div>
          <h4>Error in component: {this.state.errorMsg}</h4>
          <button onClick={() => { this.setState({ hasError: false })}}>
            Return to app
          </button>
        </div>
      )
    }

    return(
      <div>
          <h4>Ciclo de montaje: ComponentDidCatch</h4>
          <ErrorButton />
        </div>
    )
  }
}

export default ComponentDidCatch;
