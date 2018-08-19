import React, { Component } from 'react';
import CssCodeEditor from '../../common/CssCodeEditor';
import HtmlCodeEditor from '../../common/HtmlCodeEditor';
import ResultPane from '../../common/ResultPane';
import styled from 'styled-components';
import ExerciseSelection from '../../common/ExerciseSelection';
import SELECTOR_EXERCISES from './selectorExercises';

const LevelTitle = styled.h3`
  margin: 0;
`;

const CSS_DECLARATION_REGEX = /\{([\s\S][^}]*)/gim;
const WHITESPACE_REGEX = /^\s+/gim;

class SelectorsLevel extends Component {
  static DEFAULT_CSS_TEXT = `/* style.css */
`;
  static INFO_CSS_TEXT = `/* style.css */
/* Type in selector and declaration(s) here */`;

  state = {
    currentExerciseIndex: 0,
    cssCodeAnswer: null,
    isCorrectAnswer: false,
    initialCssEditorValue: SelectorsLevel.INFO_CSS_TEXT
  };

  isValidCss = false;

  handleExerciseSelection = event => {
    this.setState({
      currentExerciseIndex: Number(event.target.value),
      // reset other values
      cssCodeAnswer: null,
      isCorrectAnswer: false,
      initialCssEditorValue: SelectorsLevel.INFO_CSS_TEXT
    });
  };

  setValidationResult = errors => {
    this.isValidCss = errors.length === 0;
  };

  isCorrectAnswer(cssCode) {
    let correctAnswer = SELECTOR_EXERCISES[this.state.currentExerciseIndex].correctAnswer;
    let selector = cssCode
      .split('{')[0] // exerices only call for 1 selector
      .replace(SelectorsLevel.DEFAULT_CSS_TEXT, '')
      .trim();
    let isSelectorMatch = selector === correctAnswer.selector;

    let matchedCode = CSS_DECLARATION_REGEX.exec(cssCode);
    if (!matchedCode || !matchedCode[1]) {
      console.error('Could not interpret declartions ', matchedCode);
      return;
    }
    let declarations = matchedCode[1].split(';'); // we want the second match because it doesn't include the curly brace
    let isDeclarationsMatch = declarations
      .map(value => value.replace(WHITESPACE_REGEX, ''))
      .filter(cleanValue => cleanValue !== '')
      .every(declaration => correctAnswer.declarations.includes(declaration));

    console.log(`isSelectorMatch: ${isSelectorMatch} isDeclarationsMatch: ${isDeclarationsMatch}`);
    return isSelectorMatch && isDeclarationsMatch;
  }

  handleCssCodeEditorFocus = event => {
    if (this.state.initialCssEditorValue !== SelectorsLevel.DEFAULT_CSS_TEXT) {
      this.setState({ initialCssEditorValue: SelectorsLevel.DEFAULT_CSS_TEXT });
    }
  };

  handleCssCodeChange = cssCodeAnswer => {
    if (
      this.isValidCss &&
      cssCodeAnswer !== SelectorsLevel.DEFAULT_CSS_TEXT &&
      cssCodeAnswer !== SelectorsLevel.INFO_CSS_TEXT
    ) {
      let isCorrectAnswer = this.isCorrectAnswer(cssCodeAnswer);
      this.setState({
        cssCodeAnswer: cssCodeAnswer,
        isCorrectAnswer: isCorrectAnswer
      });
    }
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
          <CssCodeEditor
            value={this.state.initialCssEditorValue}
            onFocus={this.handleCssCodeEditorFocus}
            onChange={this.handleCssCodeChange}
            onValidate={this.setValidationResult}
          />
          <HtmlCodeEditor value={currentExercise.html} />
        </div>

        <div className="col-6 col">
          <ResultPane
            html={currentExercise.html}
            isCorrectAnswer={this.state.isCorrectAnswer}
            cssCodeAnswer={this.state.cssCodeAnswer}
          />
        </div>
      </div>
    );
  }
}

export default SelectorsLevel;
