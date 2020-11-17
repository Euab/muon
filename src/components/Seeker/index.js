import React from 'react'

import './index.css'

class Seeker extends React.Component {
  render() {
    return (
      <div className="seeker_container">
        <div style={{ width: this.props.fill }} className="seeker_fill" />
      </div>
    )
  }
}

export default Seeker