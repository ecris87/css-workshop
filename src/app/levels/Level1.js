import React from 'react';
import CssCodeEditor from '../common/CssCodeEditor';
import HtmlCodeEditor from '../common/HtmlCodeEditor';
import Spacing from '../common/Spacing';
import ResultPane from '../common/ResultPane';
import styled from 'styled-components';

function onChange(newValue) {
  console.log('change', newValue);
}

const LevelTitle = styled.h3`
  margin: 0;
`;

const HTML = '<div class="app">Test</div>';

const Level1 = () => {
  return (
    <div className="row">
      <div className="col-12 col">
        <LevelTitle>Level 1: Selectors, Properties and Values</LevelTitle>
      </div>
      <div className="col-6 col">
        <Spacing>Instructions</Spacing>
        <CssCodeEditor onChange={onChange} />
        <HtmlCodeEditor defaultValue={HTML} />
      </div>
      <div className="col-6 col">
        <ResultPane />
      </div>
    </div>
  );
};

export default Level1;
