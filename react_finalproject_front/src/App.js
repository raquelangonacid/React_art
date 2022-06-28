import { useState } from "react";
import './App.css';
import Navigator from './components/Navigator/Navigator';
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import GalleryDetail from "./pages/GalleryDetail/GalleryDetail";
import Painters from "./pages/Painters/Painters";
import PainterDetail from "./pages/PainterDetail/PainterDetail";
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { RequireAuth } from './components/RequireAuth/RequireAuth';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {JwtContext} from "./context/jwtContext"


function App() {
  const [jwt, setJwt] = useState(null);

  return (
    <div >
      <JwtContext.Provider value={{ jwt, setJwt }}>
      <Router>
        <div className="Nav">
          <Navigator />
        </div>
        <div className="All">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art" element={<RequireAuth><Gallery /></RequireAuth>} />
          <Route path="/art/:id" element={<RequireAuth><GalleryDetail /></RequireAuth>} />
          <Route path="/artists" element={<RequireAuth><Painters/></RequireAuth>} />
          <Route path="/artists/:id" element={<RequireAuth><PainterDetail/></RequireAuth>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        </div>
      </Router>
      </JwtContext.Provider>
    </div>
  );
}

export default App;
