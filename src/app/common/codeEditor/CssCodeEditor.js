import React, { PureComponent } from 'react';
import CodeEditor from './CodeEditor';
import Spacing from 'app/common/Spacing';
import PropTypes from 'prop-types';

class CssCodeEditor extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func,
    onValidate: PropTypes.func
  };

  render() {
    const { onChange, onValidate, onFocus, value } = this.props;
    return (
      <Spacing>
        <CodeEditor
          mode="css"
          onValidate={onValidate}
          onChange={onChange}
          onFocus={onFocus}
          value={value}
          height="300px"
          highlightActiveLine
        />
      </Spacing>
    );
  }
}

export default CssCodeEditor;
