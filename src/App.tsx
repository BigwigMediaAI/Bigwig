// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Landing2 from "./Pages/Landing2"; // import your mobile component
import HelpSection from "./components/HelpSection";
import Method from "./components/Madness";
import YBigwigSection from "./components/YBigwigSection";
import Clients from "./components/Clients";
import Agency from "./components/Agency";
import Strategy from "./components/Strategy";
import ContactPage from "./Pages/Contact";
import Privacy from "./Pages/Privacy";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Show Landing2 on mobile, hide on md+ */}
              <div className="block md:hidden">
                <Landing2 />
              </div>

              {/* Show Landing on md+ (desktop), hide on mobile */}
              <div className="hidden md:block">
                <Landing />
              </div>
            </>
          }
        />
        <Route path="/things-we-do" element={<HelpSection />} />
        <Route path="/Method" element={<Method />} />
        <Route path="/Y-Bigwig" element={<YBigwigSection />} />
        <Route path="/Clients" element={<Clients />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/Agency" element={<Agency />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;
