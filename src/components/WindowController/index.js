import React from 'react'

import './index.css'

import WindowButton from './WindowButton'

class WindowController extends React.Component {

  render() {
    return (
      <div className="window_controller_container">
        <WindowButton
          icon="window-minimize"
          color="#14161b"
        />
        <WindowButton
          icon="window-maximize"
          color="#14161b"
        />
        <WindowButton
          icon="close"
          color="#14161b"
        />
      </div>
    )
  }
}

export default WindowController