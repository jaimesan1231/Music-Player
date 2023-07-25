import "./App.css";
import { connect } from "react-redux";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App(props) {
  return (
    <div className="App">
      <Sidebar />
      <Body />
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    artist: state.artist,
    songs: state.songs,
    currentSongs: state.currentSongs,
  };
};

export default connect(mapStateToProps, null)(App);
