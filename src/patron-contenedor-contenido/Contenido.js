import React, { Component } from "react";

const _renderCurrencies = bpi =>
  Object.keys(bpi).map(actual => (
    <div key={actual}>
      1 Bitcoin is {bpi[actual].rate}
      <span>{bpi[actual].code}</span>
    </div>
  ));

function BitCoinPrice(props) {
  const { bpi } = props;

  return (
    <div>
      <h4>Bitcoin Price</h4>
      {_renderCurrencies(bpi)}
    </div>
  );
}

export default BitCoinPrice;
