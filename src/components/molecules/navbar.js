import React from "react";
import styled from "styled-components";
import { Anchor } from "../atoms/anchor";
import { Logo } from "../atoms/logo";
import { Layout } from "../atoms/layout";

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
    <Layout>
      <Container>
        <Logo />
        <Menu>
          {links.map((link, i) => (
            <Anchor
              label={link.label}
              url={link.url}
              key={i}
              style={{ marginRight: "2rem" }}
            />
          ))}
        </Menu>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  width: calc(100% - 190px);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
`;
