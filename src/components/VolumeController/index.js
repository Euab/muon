import React from 'react'
import FontAwesome from 'react-fontawesome'

import VolumeSlider from './VolumeSlider'

import './index.css'

class VolumeController extends React.Component {

  render() {
    return (
      <div className="volume_controller_container">
        <FontAwesome name="volume-up" />
        <VolumeSlider fill={this.props.fill} />
      </div>
    )
  }
}

export default VolumeController
