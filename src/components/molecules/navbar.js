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
      {links.map((link, i) => (
        <Anchor label={link.label} url={link.url} key={i} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 40px 95px 0;
  width: calc(100% - 190px);
  display: flex;
  flex-direction: space-between;
  align-items: center;
`;
