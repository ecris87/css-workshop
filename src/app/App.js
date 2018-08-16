import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Intro from './intro/Intro';
import Level1 from './levels/Level1';
import Level2 from './levels/Level2';
import Level3 from './levels/Level3';
import Level4 from './levels/Level4';
import Level5 from './levels/Level5';

class App extends Component {
  render() {
    return (
      <Router>
        <main className="app">
          <Route exact path="/" component={Intro} />
          <Route path="/level1" component={Level1} />
          <Route path="/level2" component={Level2} />
          <Route path="/level3" component={Level3} />
          <Route path="/level4" component={Level4} />
          <Route path="/level5" component={Level5} />
        </main>
      </Router>
    );
  }
}

export default App;
