import React from 'react'
import SideMenuObject from './SideMenuObject'

import './index.css'

class SideMenu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="side_menu_container">
        {this.renderItems()}
      </div>
    )
  }

  renderItems() {
    return this.props.children.map((el, i) => {
      return (
        <SideMenuObject>
          {el}
        </SideMenuObject>
      )
    })
  }
}

export default SideMenu