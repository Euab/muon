import React from 'react';

import './index.css';

class Footer extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}

export default Footer;