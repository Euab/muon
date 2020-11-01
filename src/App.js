import './App.css';
import VerticalPanel from './components/VerticalPanel'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app_container">
      <Navbar className="navbar"></Navbar>
      <div className="panel_container">
        <VerticalPanel className="left_panel" />
        <VerticalPanel className="center_panel" />
        <VerticalPanel className="right_panel" />
      </div>
      <Footer className="footer"></Footer>
    </div>
  );
}

export default App;
