import React, { PureComponent } from 'react';
import CodeEditor from './CodeEditor';
import { EditorWrapper } from 'app/common/ComponentsLibrary';
import PropTypes from 'prop-types';

class CssCodeEditor extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func,
    onValidate: PropTypes.func
  };

  render() {
    const { onChange, onValidate, onFocus, value } = this.props;
    return (
      <EditorWrapper>
        <CodeEditor
          mode="css"
          onValidate={onValidate}
          onChange={onChange}
          onFocus={onFocus}
          value={value}
          height="100%"
          highlightActiveLine
        />
      </EditorWrapper>
    );
  }
}

export default CssCodeEditor;
