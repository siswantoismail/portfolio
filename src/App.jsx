import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Workflow from "./components/Workflow";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Services />
      {/* <GithubSection /> */}
      <Workflow />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
