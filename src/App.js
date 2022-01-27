import './App.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Spacepewpew from './components/spacepewpew/spacepewpew';
import Home from './components/home/home'
import Rengoku from './components/rengoku/rengoku';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/spacepewpew" exact element={<Spacepewpew />} />
      <Route path="/rengoku" exact element={<Rengoku />} />
      {/* <Route path="/" exact element={<Home />} />
      <Route path="/spacepewpew" exact element={<Spacepewpew />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
