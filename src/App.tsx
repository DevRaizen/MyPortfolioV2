import { useState } from "react";
import Header from "./components/header";
import "./App.css";
import Hero from "./components/hero";
import Projects from "./components/project";
import Stack from "./components/stack";
import Experience from "./components/experience";
import CTA from "./components/cta";
import Contact from "./components/contact";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="grid grid-cols-2 pt-4 max-w-7xl mx-auto w-full gap-4">
        <Hero />
        <Projects />
      </div>
      <div className="grid grid-cols-4 pt-4 max-w-7xl mx-auto w-full gap-4">
        <Stack />
        <Experience />
        <CTA />
        <Contact />
      </div>
    </>
  );
}

export default App;
