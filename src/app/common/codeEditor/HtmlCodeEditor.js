import React, { PureComponent } from 'react';
import CodeEditor from './CodeEditor';
import { Spacing } from 'app/common/ComponentsLibrary';
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
      <Spacing>
        <CodeEditor mode="html" value={TEXT_HTML + value} height="300px" readOnly highlightActiveLine={false} />
      </Spacing>
    );
  }
}

export default HtmlCodeEditor;
