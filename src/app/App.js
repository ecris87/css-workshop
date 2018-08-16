import React, { Component } from 'react';
import logo from '../images/ninja.svg';

class App extends Component {
  render() {
    return (
      <main className="app">
        <header className="app__header">
          <h1>CSS Workshop: Choose your destiny!</h1>
        </header>
        <ul className="app__levels">
          <li>Level 1: Selectors, Properties and Values</li>
          <li>Level 2: Box Model</li>
          <li>Level 3: Positioning</li>
          <li>Level 4: Cascade and Specificity</li>
          <li>Level 5: Flexbox</li>
        </ul>
        <footer>
          <img className="app__logo" src={logo} alt="logo" />
        </footer>
      </main>
    );
  }
}

export default App;
