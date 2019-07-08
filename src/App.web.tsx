import React, { FunctionComponent } from 'react';

import logo from './logo.svg';
import './App.css';

// Shared modules, most likely to do with just the business logic.
import { INITIAL_VALUE, STEP_VALUE } from 'App.constants';
import { useValueState } from 'App.hooks';
import { toAddString, toSubtractString } from 'App.utilities';

export const App: FunctionComponent = () => {
  const {
    value,
    incrementValue,
    decrementValue,
  } = useValueState(INITIAL_VALUE, STEP_VALUE);

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
          <button onClick={incrementValue}>{toAddString(STEP_VALUE)}</button>
          <button onClick={decrementValue}>{toSubtractString(STEP_VALUE)}</button>
        </div>
      </header>
    </div>
  );
};
