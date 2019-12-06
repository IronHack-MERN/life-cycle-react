import React, { Component } from "react";
import BitCoinPrice from "./Contenido";

class BitCoinPriceContainer extends Component {
  state = { bpi: {} };

  componentDidMount() {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(res => res.json())
      .then(data => {
        const { bpi } = data;
        this.setState({ bpi });
      });
  }

  render() {
    return (
      <div>
        <BitCoinPrice 
          bpi = { this.state.bpi }
        />
      </div>
    );
  }
}

export default BitCoinPriceContainer;
