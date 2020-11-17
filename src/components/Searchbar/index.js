import React from 'react'
import FontAwesome from 'react-fontawesome'

import './index.css'

class Searchbar extends React.Component {

  render() {
    return (
      <div className="search_box_container">
        <FontAwesome name="search" />
        <form>
          <input type="text" placeholder="Search" />
        </form>
      </div>
    )
  }
}

export default Searchbar