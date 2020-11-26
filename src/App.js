import './App.css'

import FontAwesome from 'react-fontawesome'

import VerticalPanel from './components/VerticalPanel'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Spacer from './components/Spacer'
import PlayerController from './components/PlayerController'
import Seeker from './components/Seeker'
import Cover from './components/AlbumCover'
import TrackDetails from './components/TrackDetails'
import Searchbar from './components/Searchbar'
import WindowController from './components/WindowController'
import SideMenu from './components/SideMenu'
import VolumeController from './components/VolumeController'

function App() {
  return (
    <div className="app_container">
      <Navbar className="navbar">
        <Searchbar />
        <Spacer />
        <Spacer />
        <WindowController />
      </Navbar>
      <div className="panel_container">
        <VerticalPanel className="left_panel">
          <SideMenu>
            <a href="#"><FontAwesome name="home" /> Home</a>
            <a href="#"><FontAwesome name="download" /> Downloads</a>
            <a href="#"><FontAwesome name="music" /> Playlists</a>
            <a href="#"><FontAwesome name="cogs" /> Settings</a>
          </SideMenu>
        </VerticalPanel>
        <VerticalPanel className="center_panel" />
      </div>
      <Footer className="footer">
        <Seeker fill="35%" />
        <div className="footer_wrapper">
          <div className="np_wrapper">
            <Cover cover="https://images.genius.com/eb9b06292813479118c915c5420d1690.1000x1000x1.png" />
            <TrackDetails track="Out on Bail" artist="YG"></TrackDetails>
          </div>
          <PlayerController />
          <Spacer />
          <VolumeController />
        </div>
      </Footer>
    </div>
  );
}

export default App
