import React from 'react';
import FontAwesome from 'react-fontawesome';

import './index.css';

class PlayerButton extends React.Component {

  render() {
    return (
      <div className="player_button_container">
        <FontAwesome name={this.props.icon} />
      </div>
    );
  }
}

export default PlayerButton;