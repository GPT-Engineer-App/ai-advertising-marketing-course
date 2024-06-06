import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Testimonials from "./pages/Testimonials.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </Router>
  );
}

export default App;
