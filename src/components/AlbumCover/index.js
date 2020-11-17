import React from 'react'
import './index.css'

class AlbumCover extends React.Component {

  render() {
    return (
      <div className="cover_container">
        <img src={this.props.cover} />
      </div>
    )
  }
}

export default AlbumCover