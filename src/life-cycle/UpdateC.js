import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

const ANIMALS_IMG = {
  panda: 'https://goo.gl/oNbtoq',
  cat: 'https://goo.gl/PoQQXb',
  dolphin: 'https://goo.gl/BbiKCd' 
}

const ANIMALS = Object.keys(ANIMALS_IMG);

class AnimalImage extends PureComponent {
  state = { src: ANIMALS_IMG[this.props.animal] }

  componentWillReceiveProps (nextProps){ 
    console.clear();
    console.log('1 -> componentWillReceiveProps');
    console.log(nextProps)
    this.setState({ src: ANIMALS_IMG[nextProps.animal] })
  }

  shouldComponentUpdate(nextProps){
    console.log('2-> shouldComponetUpdate');
    return this.props.animal !== nextProps.animal;
  }

  // Is executed if shouldComponentUpdate return true
  componentWillUpdate(nextProps, nextSate){
    console.log('3. componentWillUpdate', nextProps, nextSate);
    // recupero el elemento image del árbol utilizando un query selector
    // y logamos el atributo alt de la imagen
    const img = document.querySelector('img')
    console.log('from img element', { alt:img.alt } );
    // web animations api
    img.animate(
      [
        { filter: 'blur(0px)' },
        { filter: 'blur(2px)' }
      ],
      {
        duration: 1500,
        easing: 'ease'
      }
    )
  }

  render() {
    console.log('-> render');
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

class UpdateC extends Component {
    state = { animal: 'panda' }

    _renderAnimalButton = (animal) => {
      return(
        <button 
          key={animal} 
          onClick = { () => this.setState({ animal }) }>
          {animal}
        </button>
      )
    }

    render() {
      return (
        <div>
          <h2>Ciclo de Actualización</h2>
          <h4>Example of ShouldComponentUpdate</h4>
          { ANIMALS.map(this._renderAnimalButton) }

          <AnimalImage
            animal = {this.state.animal}
          />
        </div>
        );
    }
}

export default UpdateC;