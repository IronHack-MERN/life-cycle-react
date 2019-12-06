import React from 'react';
import './App.css';
import ComponentWillUnmount from './life-cycle/ComponentWillUnmount';

function App() {
  return (
    <div className="App">
      <ComponentWillUnmount />
    </div>
  );
}

export default App;
