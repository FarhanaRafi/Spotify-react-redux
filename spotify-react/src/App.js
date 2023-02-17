import "./App.css";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Footer />
      <MusicPlayer />
    </div>
  );
}

export default App;
