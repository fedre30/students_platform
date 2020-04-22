import React from "react";
import "./App.css";
import { Navbar } from "./components/molecules/navbar";
import { IntroSection } from "./components/organisms/intro-section";

function App() {
  return (
    <div className="App">
      <Navbar />
      <IntroSection />
    </div>
  );
}

export default App;
