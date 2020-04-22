import React, { useState } from "react";
import { Navbar } from "../components/molecules/navbar";
import { IntroSection } from "../components/organisms/intro-section";
import { AboutSection } from "../components/organisms/about-section";
import { WorksSections } from "../components/organisms/works-section";

export const Home = () => {
  const [member, setMember] = useState(1);
  return (
    <div>
      <Navbar />
      <IntroSection />
      <AboutSection member={member} setMember={setMember} />
      <WorksSections member={member} setMember={setMember} />
    </div>
  );
};
