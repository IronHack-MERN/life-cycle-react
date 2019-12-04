import React, { Component } from 'react';

class FetchExample extends Component {

  // i add un empty state
  state = {
    bpi: {}
  }
  componentDidMount(){
        // this function return a promise 
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then(res => res.json())
          .then(data => {
            const { bpi } = data;
            this.setState({ bpi } )
          }) 
    }

    _renderCurrencies(){
      const { bpi } = this.state;
      const currencies = Object.keys(bpi) // ['EUR', 'GBP', 'USD']
      return currencies.map( actual => (
        <div key={actual}>
          1 Bitcoin is {bpi[actual].rate}
          <span>{actual}</span>
        </div>
      ))
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