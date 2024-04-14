import HomePage from "./Components/Mobile/mobileHome";
import MoonPage from './Components/Mobile/mobileMoon'
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Moon" element={<MoonPage />} />
      </Routes>
    </Router>
  );
}

export default App;
