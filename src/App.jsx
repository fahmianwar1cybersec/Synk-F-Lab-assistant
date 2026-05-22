import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Explainer from "./pages/Explainer";
import Viva from "./pages/Viva";
import Report from "./pages/Report";
import Safety from "./pages/Safety";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explainer" element={<Explainer />} />
      <Route path="/viva" element={<Viva />} />
      <Route path="/report" element={<Report />} />
      <Route path="/safety" element={<Safety />} />
    </Routes>
  );
}

export default App;