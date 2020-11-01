import './App.css'
import VerticalPanel from './components/VerticalPanel'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Spacer from './components/Spacer'
import PlayerController from './components/PlayerController'
import Seeker from './components/Seeker'

function App() {
  return (
    <div className="app_container">
      <Navbar className="navbar"></Navbar>
      <div className="panel_container">
        <VerticalPanel className="left_panel" />
        <VerticalPanel className="center_panel" />
        <VerticalPanel className="right_panel" />
      </div>
      <Footer className="footer">
        <Seeker fill="35%" />
        <div className="footer_wrapper">
          <Spacer />
          <PlayerController />
          <Spacer />
        </div>
      </Footer>
    </div>
  );
}

export default App
