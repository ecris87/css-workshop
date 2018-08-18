import React, { PureComponent } from 'react';
import CodeEditor from '../common/CodeEditor';
import Spacing from '../common/Spacing';
import PropTypes from 'prop-types';

const TEXT_CSS = `/* style.css */
`;

class CssCodeEditor extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func,
    onValidate: PropTypes.func
  };

  render() {
    const { onChange, onValidate } = this.props;
    return (
      <Spacing>
        <CodeEditor
          mode="css"
          onValidate={onValidate}
          onChange={onChange}
          defaultValue={TEXT_CSS}
          height="300px"
          highlightActiveLine
        />
      </Spacing>
    );
  }
}

export default CssCodeEditor;
