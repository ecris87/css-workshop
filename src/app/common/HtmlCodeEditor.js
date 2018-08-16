import React from 'react';
import CodeEditor from '../common/CodeEditor';
import Spacing from '../common/Spacing';

const TEXT_HTML = `/* index.html */
`;

const HtmlCodeEditor = ({ defaultValue }) => {
  return (
    <Spacing>
      <CodeEditor mode="html" defaultValue={TEXT_HTML + defaultValue} height="300px" readOnly />
    </Spacing>
  );
};

export default HtmlCodeEditor;
