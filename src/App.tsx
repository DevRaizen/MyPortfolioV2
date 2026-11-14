import Header from "./components/header";
import "./App.css";
import Hero from "./components/hero";
import Projects from "./components/project";
import Stack from "./components/stack";
import Experience from "./components/experience";
import CTA from "./components/cta";
import Contact from "./components/contact";
import useFx from "./hooks/useFx";
function App() {
  useFx();
  return (
    <>
    <div id="fx-bar" className="fx-bar" />
    <div className="fx-aurora" aria-hidden="true"><i /><i /><i /></div>
    <div id="fx-cursor" className="fx-cursor" aria-hidden="true" />
    <div>
      <Header />

      {/* HERO + PROJECTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4 mx-6 ">
        <Hero />
        <Projects />
      </div>

      {/* STACK + EXPERIENCE + CTA + CONTACT */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 mx-6">
        <Stack />
        <Experience />
        <CTA />
        <Contact />
      </div>
    </div>
    </>
  );
}

export default App;
