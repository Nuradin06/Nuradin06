
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <Router> {/* ← C’est indispensable */}
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <About />
            <Projects />
            <Contact />
          </>
        } />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
