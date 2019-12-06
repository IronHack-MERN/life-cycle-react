import React, { Component } from "react";

class BitCoinPrice extends Component {

  _renderCurrencies() {
    const { bpi } = this.props;

    return Object.keys(bpi).map(actual => (
      <div key={actual}>
        1 Bitcoin is {bpi[actual].rate}
        <span>{bpi[actual].code}</span>
      </div>
    ));
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

export default BitCoinPrice;
