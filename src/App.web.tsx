import React, { FunctionComponent } from 'react';
import logo from './logo.svg';
import './App.css';

import { useValueState } from './App.hooks';

export const App: FunctionComponent = () => {
  const {
    value,
    incrementValue,
    decrementValue,
  } = useValueState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <span>{value}</span>
          <button onClick={incrementValue}>+1</button>
          <button onClick={decrementValue}>-1</button>
        </div>
      </header>
    </div>
  );
};
