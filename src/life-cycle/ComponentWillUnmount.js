import React, { Component } from "react";
import ComponentToUnmount from "../components/ComponentToUnmount";

class ComponentWillUnmount extends Component {
  state = {
    showComponent: true
  };

  render() {
    if (this.state.showComponent) {
      return (
        <div>
            <h4>Ciclo de desmontaje componentWillUnmount</h4>
            <ComponentToUnmount />
            <button onClick={ () => this.setState( {showComponent: false } )}>
              Desmontar componente
            </button>
        </div>
      )
    }
    return(
      <p>Componte desmontado</p>
    )
  }
}

export default ComponentWillUnmount;
