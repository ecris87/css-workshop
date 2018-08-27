import React, { Component } from 'react';
import HtmlCodeEditor from 'app/common/codeEditor/HtmlCodeEditor';
import CssCodeEditor from 'app/common/codeEditor/CssCodeEditor';
import ResultPane from 'app/common/ResultPane';
import { LevelTitle, ExerciseQuestion, LevelContent } from 'app/common/ComponentsLibrary';
import ExerciseSelection from 'app/common/exercises/ExerciseSelection';
import SPECIFICITY_EXERCISES from './specificityExercises';
import classnames from 'classnames';

class SpecificityLevel extends Component {
  state = {
    currentExerciseIndex: 0,
    isCorrectAnswer: false,
    selectedAnswer: null,
    shouldDisplayResultPane: false
  };

  handleExerciseSelection = event => {
    let index = Number(event.target.value);
    this.setState({
      currentExerciseIndex: index,
      // reset other values
      isCorrectAnswer: false,
      selectedAnswer: null,
      shouldDisplayResultPane: false
    });
  };

  handleAnswer(isCorrect, text) {
    this.setState({ isCorrectAnswer: isCorrect, selectedAnswer: text }, () => {
      this.setState({ shouldDisplayResultPane: true });
    });
  }

  render() {
    const currentExercise = SPECIFICITY_EXERCISES[this.state.currentExerciseIndex];
    const btnClassName = classnames('btn-small', {
      'btn-success': this.state.selectedAnswer && this.state.isCorrectAnswer,
      'btn-danger': this.state.selectedAnswer && !this.state.isCorrectAnswer
    });
    return (
      <div className="row">
        <LevelTitle className="col-12 col">
          <h3>Level 4: Cascade and Specificity</h3>
        </LevelTitle>

        <LevelContent className="col-6 col">
          <ExerciseSelection
            onChange={this.handleExerciseSelection}
            value={this.state.currentExerciseIndex}
            exercises={SPECIFICITY_EXERCISES}
          />
          <ExerciseQuestion>
            <p>{currentExercise.question}</p>
            {currentExercise.answers.map(answer => (
              <button
                key={answer.text}
                className={answer.text === this.state.selectedAnswer ? btnClassName : 'btn-small'}
                onClick={this.handleAnswer.bind(this, answer.isCorrect, answer.text)}
              >
                {answer.text}
              </button>
            ))}
          </ExerciseQuestion>
          {currentExercise.css && <CssCodeEditor value={currentExercise.css} />}
          <HtmlCodeEditor value={currentExercise.html} />
        </LevelContent>

        <LevelContent className="col-6 col">
          {this.state.shouldDisplayResultPane && (
            <ResultPane
              html={currentExercise.html}
              cssCodeAnswer={currentExercise.css}
              isCorrectAnswer={this.state.isCorrectAnswer}
            />
          )}
        </LevelContent>
      </div>
    );
  }
}

export default SpecificityLevel;
