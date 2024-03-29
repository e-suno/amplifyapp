import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header> {/* className="App-header"*/}
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
        {/* <h1>Hello from V2</h1> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
