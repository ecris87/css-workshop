import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/css';
import 'brace/mode/html';
import 'brace/theme/textmate';
import 'brace/ext/language_tools';

const CodeEditor = ({ mode, onChange, defaultValue, height, readOnly }) => {
  return (
    <AceEditor
      // configurable props
      mode={mode}
      onChange={onChange}
      defaultValue={defaultValue}
      readOnly={readOnly}
      height={height}
      // default props
      theme="textmate"
      name="css-code-editor"
      fontSize={14}
      debounceChangePeriod={500}
      enableBasicAutocompletion
      enableLiveAutocompletion
      cursorStart={2}
      editorProps={{ $blockScrolling: Infinity }}
    />
  );
};

export default CodeEditor;
