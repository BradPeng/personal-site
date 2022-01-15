import './App.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Spacepewpew from './components/spacepewpew/spacepewpew';
import Home from './components/home';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/personal-site" exact element={<Home />} />
      <Route path="/personal-site/spacepewpew" exact element={<Spacepewpew />} />
      {/* <Route path="/" exact element={<Home />} />
      <Route path="/spacepewpew" exact element={<Spacepewpew />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
