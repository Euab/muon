import React from 'react'

import './index.css'

import WindowButton from './WindowButton'

class WindowController extends React.Component {

  render() {
    return (
      <div className="window_controller_container">
        <WindowButton
          icon="window-minimize"
          color="#ebcb8b"
        />
        <WindowButton
          icon="window-maximize"
          color="#a3be8c"
        />
        <WindowButton
          icon="close"
          color="#bf616a"
        />
      </div>
    )
  }
}

export default WindowController