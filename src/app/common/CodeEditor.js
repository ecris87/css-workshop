import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/css';
import 'brace/mode/html';
import 'brace/theme/textmate';
import 'brace/ext/language_tools';
import PropTypes from 'prop-types';

const CodeEditor = props => {
  return (
    <AceEditor
      // configurable props
      {...props}
      // default props
      theme="textmate"
      name="code-editor"
      fontSize={14}
      debounceChangePeriod={500}
      enableBasicAutocompletion
      enableLiveAutocompletion
      editorProps={{ $blockScrolling: Infinity }}
    />
  );
};

CodeEditor.propTypes = {
  mode: PropTypes.string,
  readOnly: PropTypes.bool,
  highlightActiveLine: PropTypes.bool,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  height: PropTypes.string,
  onChange: PropTypes.func,
  onValidate: PropTypes.func,
  onFocus: PropTypes.func
};

export default CodeEditor;
