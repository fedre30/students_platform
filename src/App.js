import React from "react";
import "./App.css";
import { Navbar } from "./components/molecules/navbar";
import { IntroSection } from "./components/organisms/intro-section";
import { AboutSection } from "./components/organisms/about-section";

function App() {
  return (
    <div className="App">
      <Navbar />
      <IntroSection />
      <AboutSection />
    </div>
  );
}

export default App;
