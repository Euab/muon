import React from 'react'

import './index.css'

class TrackDetails extends React.Component {

  render() {
    return (
      <div className="track_info_container">
        <div className="track_name">{this.props.track}</div>
        <div className="artist_name">{this.props.artist}</div>
      </div>
    )
  }
}

export default TrackDetails