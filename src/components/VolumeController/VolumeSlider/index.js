import React from 'react'
import FontAwesome from 'react-fontawesome'

import './index.css'

class VolumeSlider extends React.Component {

  render() {
    return (
      <div className="volume_slider_container">
        <div className="volume_slider_bgrd">
          <div style={{ width: this.props.fill }} className="volume_slider_fill"></div>
        </div>
      </div>
    )
  }
}

export default VolumeSlider
