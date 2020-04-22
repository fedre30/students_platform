import React from "react";
import styled from "styled-components";
import { Anchor } from "../atoms/anchor";
import { Logo } from "../atoms/logo";

export const Navbar = () => {
  const links = [
    {
      label: "Home",
      url: "home",
    },
    {
      label: "About",
      url: "about",
    },
    {
      label: "Works",
      url: "works",
    },
    {
      label: "Contact",
      url: "contact",
    },
  ];

  return (
    <Container>
      <Logo />
      {links.map((link) => (
        <Anchor label={link.label} url={link.url} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: space-between;
`;
