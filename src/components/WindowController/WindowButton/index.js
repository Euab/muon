import React from 'react'
import FontAwesome from 'react-fontawesome'

import './index.css'

class WindowButton extends React.Component {

  render() {
    return (
      <div
        style={{ backgroundColor: this.props.color }}
        className="close_button_container"
        onClick={this.props.onClick}
      >
        <FontAwesome name={this.props.icon} />
      </div>
    )
  }
}

export default WindowButton
