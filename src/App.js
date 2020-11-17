import './App.css'
import VerticalPanel from './components/VerticalPanel'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Spacer from './components/Spacer'
import PlayerController from './components/PlayerController'
import Seeker from './components/Seeker'
import Cover from './components/AlbumCover'

function App() {
  return (
    <div className="app_container">
      <Navbar className="navbar"></Navbar>
      <div className="panel_container">
        <VerticalPanel className="left_panel" />
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
        </div>
      </Footer>
    </div>
  );
}

export default App
