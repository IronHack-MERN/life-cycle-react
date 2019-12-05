import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ANIMALS_IMG = {
  panda: 'https://goo.gl/oNbtoq',
  cat: 'https://goo.gl/PoQQXb',
  dolphin: 'https://goo.gl/BbiKCd' 
}

const ANIMALS = Object.keys(ANIMALS_IMG);

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
  animal: PropTypes.oneOf( ANIMALS )
}

class Update extends Component {
    state = { animal: 'panda' }

    _renderAnimalButton = (animal) => {
      return(
        <button 
          disabled={animal === this.state.animal}
          key={animal} 
          onClick = { () => this.setState({ animal }) }>
          {animal}
        </button>
      )
    }

    render() {
      return (
        <div>
          <h4>ComponentWillReceiveProps</h4>
          { ANIMALS.map(this._renderAnimalButton) }

          <AnimalImage
            animal = {this.state.animal}
          />
        </div>
        );
    }
}

export default Update;