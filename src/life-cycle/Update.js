import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ANIMALS_IMG = {
    cat: 'https://goo.gl/PoQQXb',
    dolphin: 'https://goo.gl/BbiKCd',
    panda: 'https://goo.gl/oNbtoq'
}

class AnimalImage extends Component {
    state = { src: ANIMALS_IMG[this.props.animal] }

    componentWillReceiveProps (nextProps){ 
      console.log('componentWillReceiveProps')
      console.log(nextProps)
      this.setState({ src: ANIMALS_IMG[nextProps.animal] })
    }

    render() {
      return(
        <div>
          <p>Selected {this.props.animal}</p>
          <img
            alt={this.props.animal}
            src={this.state.src}
            width='250' />
        </div>
      )
    }
}

AnimalImage.propTypes = {
  animal: PropTypes.oneOf( ['cat', 'dophin', 'panda'])
}

AnimalImage.defaultProps = {
  // So that the component does not stop working 
  // if the image does not exist, we add one by default
  animal: 'panda'
}

class Update extends Component {
    state = { animal: 'panda' }
    render() {
        return (
            <div>
                <h4>ComponentWillReceiveProps</h4>
                <button onClick = { () => this.setState({ animal: 'panda' }) }>
                  Panda
                </button>
                <button onClick = { () => this.setState({ animal: 'cat' }) }>
                  Cat
                </button>
                <button onClick = { () => this.setState({ animal: 'dolphin' }) }>
                  Dolphin
                </button>


                <AnimalImage
                  animal = {this.state.animal}
                />
            </div>
        );
    }
}

export default Update;