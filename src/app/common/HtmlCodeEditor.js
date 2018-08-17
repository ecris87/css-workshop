import React, { PureComponent } from 'react';
import CodeEditor from '../common/CodeEditor';
import Spacing from '../common/Spacing';

const TEXT_HTML = `/* index.html */
`;

class HtmlCodeEditor extends PureComponent {
  render() {
    const { value } = this.props;
    return (
      <Spacing>
        <CodeEditor mode="html" value={TEXT_HTML + value} height="300px" readOnly highlightActiveLine={false} />
      </Spacing>
    );
  }
}

export default HtmlCodeEditor;
