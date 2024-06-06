import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Courses from "./pages/Courses.jsx";
import Contact from "./pages/Contact.jsx";
import Enroll from "./pages/Enroll.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import AIMarketingEthicalBoundaries from "./pages/AIMarketingEthicalBoundaries.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/ai-marketing-ethical-boundaries" element={<AIMarketingEthicalBoundaries />} />
      </Routes>
    </Router>
  );
}

export default App;