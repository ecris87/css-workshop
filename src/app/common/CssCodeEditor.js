import React from 'react';
import CodeEditor from '../common/CodeEditor';
import Spacing from '../common/Spacing';

const TEXT_CSS = `/* style.css */
`;

const CssCodeEditor = ({ onChange }) => {
  return (
    <Spacing>
      <CodeEditor mode="css" onChange={onChange} defaultValue={TEXT_CSS} height="300px" />
    </Spacing>
  );
};

export default CssCodeEditor;
