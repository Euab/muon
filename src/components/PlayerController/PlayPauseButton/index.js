import React from 'react'
import FontAwesome from 'react-fontawesome'

import './index.css'

class PlayPauseButton extends React.Component {
  getIcon() {
    if (this.props.isPlaying)
      return <FontAwesome name="pause" />

    else if (this.props.isLoading)
      return <FontAwesome name="spinner" />

    else
      return <FontAwesome name="play" />
  }

  render() {
    return (
      <div className="play_pause_button_container">
        {
          this.getIcon()
        }
      </div>
    )
  }
}

export default PlayPauseButton