import './App.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Brucepewpew from './components/brucepewpew/spacepewpew';
import Home from './components/home/home'
import Rengoku from './components/rengoku/rengoku';
import Threejs from './components/threejs/threejs';
import AdventurePlatformer from './components/adventurePlatformer/swarmed';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/spacepewpew" exact element={<Brucepewpew />} />
      <Route path="/rengoku" exact element={<Rengoku />} />
      <Route path="/bruce" exact element={<Threejs />} />
      <Route path="/adventure-platformer" exact element={<AdventurePlatformer />} />
      {/* <Route path="/" exact element={<Home />} />
      <Route path="/spacepewpew" exact element={<Spacepewpew />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
