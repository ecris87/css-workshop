import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import Intro from './intro/Intro';
import SelectorsLevel from './levels/level1/SelectorsLevel';
import BoxModelLevel from './levels/level2/BoxModelLevel';
import PositioningLevel from './levels/level3/PositioningLevel';
import SpecificityLevel from './levels/level4/SpecificityLevel';
import FlexboxLevel from './levels/level5/FlexboxLevel';
import Footer from './common/Footer';

const Content = styled.div`
  padding: 0 3em;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <main className="app">
          <Content>
            <Route exact path="/" component={Intro} />
            <Route path="/level1" component={SelectorsLevel} />
            <Route path="/level2" component={BoxModelLevel} />
            <Route path="/level3" component={PositioningLevel} />
            <Route path="/level4" component={SpecificityLevel} />
            <Route path="/level5" component={FlexboxLevel} />
          </Content>
          <Footer />
        </main>
      </Router>
    );
  }
}

export default App;
