import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdventurePlatformer from "./components/adventurePlatformer/AdventurePlatformer";
import Brucepewpew from "./components/brucepewpew/brucepewpew";
import Home from "./components/home/home";
import Swarmed from "./components/swarmed/swarmed";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/brucepewpew" exact element={<Brucepewpew />} />
        <Route
          path="/adventure-platformer"
          exact
          element={<AdventurePlatformer />}
        />
        <Route path="/swarmed" exact element={<Swarmed />} />
      </Routes>
    </Router>
  );
}

export default App;
