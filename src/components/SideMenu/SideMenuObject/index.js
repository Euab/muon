import React from 'react'

import './index.css'

class SideMenuObject extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="side_menu_object_container">
        {this.props.children}
      </div>
    )
  }
}

export default SideMenuObject
