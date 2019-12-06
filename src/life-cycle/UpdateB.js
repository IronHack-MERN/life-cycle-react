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
    console.log('1 -> componentWillReceiveProps');
    console.log(nextProps)
    this.setState({ src: ANIMALS_IMG[nextProps.animal] })
  }

  // shouldComponentUpdate(nextProps){
  //   // con el shouldComponentUpdate evitamos el ciclo de actualización
  //   // este método es muy importante para una buena experiencia de usuario
  //   // así no renderizamos la página cuando no hace falta
  //   console.log('2-> shouldComponetUpdate');
  //   return this.props.animal !== nextProps.animal;
  // }

  render() {
    console.log('1-> al montar / Pero 3-> al actualziar | render');

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

class UpdateB extends Component {
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

export default UpdateB;