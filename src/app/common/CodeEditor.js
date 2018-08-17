import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/css';
import 'brace/mode/html';
import 'brace/theme/textmate';
import 'brace/ext/language_tools';

const CodeEditor = ({ mode, onChange, onValidate, defaultValue, value, height, readOnly, highlightActiveLine }) => {
  return (
    <AceEditor
      // configurable props
      mode={mode}
      onChange={onChange}
      defaultValue={defaultValue}
      readOnly={readOnly}
      value={value}
      height={height}
      highlightActiveLine={highlightActiveLine}
      onValidate={onValidate}
      // default props
      theme="textmate"
      name="css-code-editor"
      fontSize={14}
      debounceChangePeriod={500}
      enableBasicAutocompletion
      enableLiveAutocompletion
      editorProps={{ $blockScrolling: Infinity }}
    />
  );
};

export default CodeEditor;
