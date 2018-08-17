import React, { Component } from 'react';
import CssCodeEditor from '../../common/CssCodeEditor';
import HtmlCodeEditor from '../../common/HtmlCodeEditor';
import ResultPane from '../../common/ResultPane';
import styled from 'styled-components';
import ExerciseSelection from '../../common/ExerciseSelection';
import SELECTOR_EXERCISES from './level1Data';

const LevelTitle = styled.h3`
  margin: 0;
`;

class Level1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentExerciseIndex: 0
    };
  }

  handleExerciseSelection = event => {
    this.setState({
      currentExerciseIndex: event.target.value
    });
  };

  handleCssCodeChange = newValue => {
    console.log('css change', newValue);
  };

  render() {
    let currentExercise = SELECTOR_EXERCISES[this.state.currentExerciseIndex];
    return (
      <div className="row">
        <div className="col-12 col">
          <LevelTitle>Level 1: Selectors, Properties and Values</LevelTitle>
        </div>

        <div className="col-6 col">
          <ExerciseSelection
            onChange={this.handleExerciseSelection}
            value={this.state.currentExerciseIndex}
            exercises={SELECTOR_EXERCISES}
          />
          <CssCodeEditor onChange={this.handleCssCodeChange} />
          <HtmlCodeEditor value={currentExercise.html} />
        </div>

        <div className="col-6 col">
          <ResultPane html={currentExercise.html} />
        </div>
      </div>
    );
  }
}

export default Level1;
