import React, { Component } from "react";

class ComponentToUnmount extends Component {
  state = {
    windowWidth: 0
  };

  _updateState = () => {
    console.log('_updateState');
    this.setState({ windowWidth: document.body.clientWidth });
  };

  componentDidMount() {
    this._updateState();

    window.addEventListener(
      'resize', 
      this._updateState
    )
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
    window.removeEventListener(
      'resize',
      this._updateState
    )
  }

  render() {
    return (
      <div>
        <p>Ancho de la ventana:{this.state.windowWidth}</p>
      </div>
    );
  }
}

export default ComponentToUnmount;
