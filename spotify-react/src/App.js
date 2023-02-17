import "./App.css";
// import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import LikedAlbum from "./components/LikedAlbum";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Contents from "./components/Contents";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideMenu />
        <Header />

        <Contents />

        <Routes>
          {/* <Route path="/" element={<Sidebar />} /> */}

          <Route path="/favorite" element={<LikedAlbum />} />
        </Routes>
        <Footer />
        <MusicPlayer />
      </BrowserRouter>
    </div>
  );
}

export default App;
