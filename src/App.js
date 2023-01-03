import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './normalize.css'
import './App.css';

import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Music from './components/Music/Music';
import Piano from './components/Piano/Piano';
import UploadMusic from './components/UploadMusic/UploadMusic';
import Sticker from './components/Sticker/Sticker';
import UploadSticker from './components/UploadSticker/UploadSticker';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/music" element={<Music/>} />
          <Route path="/piano" element={<Piano/>} />
          <Route path="/upload-music" element={<UploadMusic/>} />
          <Route path="/sticker" element={<Sticker/>} />
          <Route path="/upload-sticker" element={<UploadSticker/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
