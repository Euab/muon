import React from 'react';

import './index.css';

class VerticalPanel extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}

export default VerticalPanel;