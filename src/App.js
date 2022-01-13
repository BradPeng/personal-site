import './App.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Spacepewpew from './components/spacepewpew';
import Home from './components/home';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="" element={<Home />} />
      <Route path="/spacepewpew" element={<Spacepewpew />} />
      </Routes>
    </Router>
  );
}

export default App;
