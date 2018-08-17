import React, { PureComponent } from 'react';
import CodeEditor from '../common/CodeEditor';
import Spacing from '../common/Spacing';

const TEXT_CSS = `/* style.css */
`;

class CssCodeEditor extends PureComponent {
  render() {
    const { onChange } = this.props;
    return (
      <Spacing>
        <CodeEditor mode="css" onChange={onChange} defaultValue={TEXT_CSS} height="300px" highlightActiveLine />
      </Spacing>
    );
  }
}

export default CssCodeEditor;
