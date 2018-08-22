import React, { PureComponent } from 'react';
import CodeEditor from './CodeEditor';
import { EditorWrapper } from 'app/common/ComponentsLibrary';
import PropTypes from 'prop-types';

const TEXT_HTML = `<!-- index.html -->
`;

class HtmlCodeEditor extends PureComponent {
  static propTypes = {
    value: PropTypes.string
  };

  render() {
    const { value } = this.props;
    return (
      <EditorWrapper>
        <CodeEditor mode="html" value={TEXT_HTML + value} height="100%" readOnly highlightActiveLine={false} />
      </EditorWrapper>
    );
  }
}

export default HtmlCodeEditor;
