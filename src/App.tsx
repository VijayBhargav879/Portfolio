import { Routes, Route } from "react-router";
import Hero from "./pages/Hero/page";
import Header from "./pages/Header/page";
import About from "./pages/About/page";
import Skills from "./pages/Skills/page";
import Certifications from "./pages/Certifications/page";
import Projects from "./pages/Projects/page";
import Contact from "./pages/Contact/page";

export default function App() {
  return (
    <>
      <div className="dark-theme">
        <Header />
        <Routes>
          {/* ✅ Home: Hero + About */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
              </>
            }
          />

          {/* ✅ Skills Page */}
          <Route path="/skills" element={<Skills />} />

          {/* ✅ Certifications Page */}
          <Route path="/Certifications" element={<Certifications />} />

          {/* ✅ Projects Page */}
          <Route path="/projects" element={<Projects />} />

          {/* ✅ Contact Page */}
          <Route path="/contact" element={<Contact />} />

          {/* ✅ 404 Catch-All */}
          <Route path="*" element={<div>404 - Page not found</div>} />
        </Routes>
      </div>
    </>
  );
}
