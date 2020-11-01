import React from 'react'

import './index.css'

import PlayPauseButton from './PlayPauseButton'
import PlayerButton from './PlayerButton'
import Spacer from '../Spacer'

class PlayerController extends React.Component {
  render() {
    return (
      <div className="player_controller_container">
        <Spacer />
        <PlayerButton icon="step-backward" />
        <PlayPauseButton />
        <PlayerButton icon="step-forward" />
        <Spacer />
      </div>
    )
  }
}

export default PlayerController