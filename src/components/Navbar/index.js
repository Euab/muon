import React from 'react';

import './index.css';

class Navbar extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}

export default Navbar;