import './App.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Spacepewpew from './components/spacepewpew';
import Home from './components/home';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/personal-site" element={<Home />} />
      <Route path="/personal-site/spacepewpew" element={<Spacepewpew />} />
      </Routes>
    </Router>
  );
}

export default App;
