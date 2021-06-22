import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Display} from '../reactComponents.js'


function App() {
  const [counter, fn] = useState(0);
  const increaseCounter = (size) => fn(counter + size);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button onClickFunc={increaseCounter} increment={5}/>
        <Button onClickFunc={increaseCounter} increment={10}/>
        <Display message={counter}/>
      </header>
     
    </div>
  );
}

export default App;
