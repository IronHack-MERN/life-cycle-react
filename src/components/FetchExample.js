import React, { Component } from 'react';

class FetchExample extends Component {

  // i add un empty state
  state = {
    bpi: {}
  }
  componentDidMount(){
        // this function return a promisse devuelve una promesa
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then(res => res.json())
          .then(data => {
            // console.log(data)
            const { bpi } = data;
            this.setState({ bpi } )
          }) 
    }

    _renderCurrencies(){
      console.log(this.state.bpi)
      const { bpi } = this.state;
      return Object.keys(bpi) // ['EUR', 'GBP', 'USD']
        .map( actual => {
          return(
            <div key={actual}>
              1 Bitcoin is {bpi[actual].rate}
              <span>{actual}</span>
            </div>
          )
        })
    }

    render() {
        return (
            <div>
                <h4>Bitcoin price - Index </h4>
                {this._renderCurrencies()}
            </div>
        );
    }
}

export default FetchExample;