import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CreateSeason from "./pages/CreateSeason.jsx";
import CreatePicker from "./pages/CreatePicker.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/create-season" element={<CreateSeason />} />
        <Route path="/create-picker" element={<CreatePicker />} />
      </Routes>
    </Router>
  );
}

export default App;
