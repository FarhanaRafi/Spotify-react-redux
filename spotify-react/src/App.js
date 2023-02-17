import "./App.css";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import LikedAlbum from "./components/LikedAlbum";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sidebar />} />

          <Route path="/favorite" element={<LikedAlbum />} />
        </Routes>
        <Footer />
        <MusicPlayer />
      </BrowserRouter>
    </div>
  );
}

export default App;
