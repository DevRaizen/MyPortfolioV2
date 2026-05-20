import Header from "./components/header";
import "./App.css";
import Hero from "./components/hero";
import Projects from "./components/project";
import Stack from "./components/stack";
import Experience from "./components/experience";
import CTA from "./components/cta";
import Contact from "./components/contact";
function App() {
  return (
    <>
      <Header />

      {/* HERO + PROJECTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4 max-w-7xl mx-auto w-full ">
        <Hero />
        <Projects />
      </div>

      {/* STACK + EXPERIENCE + CTA + CONTACT */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 max-w-7xl mx-auto w-full ">
        <Stack />
        <Experience />
        <CTA />
        <Contact />
      </div>
    </>
  );
}

export default App;
