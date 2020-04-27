import React, { useState } from "react";
import { Navbar } from "../components/molecules/navbar";
import { IntroSection } from "../components/organisms/intro-section";
import { AboutSection } from "../components/organisms/about-section";
import { WorksSections } from "../components/organisms/works-section";
import { ContactSection } from "../components/organisms/contact-section";
import Konami from "react-konami-code";
import { Title } from "../components/atoms/title";

export const Home = () => {
  const [member, setMember] = useState(1);
  const konami = () => {
    alert(
      " Groupe 5: Quentin Aimé, Federica Alfano, Aymeline Chemin, Mélanie Da Costa, Rainald Durand, Mathieu Gelbon, Ketsia Pedro, Marie Te "
    );
  };
  return (
    <div>
      <Navbar />
      <IntroSection />
      <Konami action={konami}>
        <Title content="Groupe 5: Quentin Aimé, Federica Alfano, Aymeline Chemin, Mélanie Da Costa, Rainald Durand, Mathieu Gelbon, Ketsia Pedro, Marie Te" />
      </Konami>
      <AboutSection member={member} setMember={setMember} />
      <WorksSections member={member} setMember={setMember} />
      <ContactSection />
    </div>
  );
};
