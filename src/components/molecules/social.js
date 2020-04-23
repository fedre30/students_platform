import React from "react";
import styled from "styled-components";
import { color } from "../../assets/const";

export const Social = ({ logo, label, link }) => {
  return (
    <Container>
      <a href={link}>
        <SocialStyle>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <SocialLabel>{label}</SocialLabel>
        </SocialStyle>
      </a>
    </Container>
  );
};

const Container = styled.div`
  a {
    text-decoration: none;
  }
`;

const SocialStyle = styled.button`
  width: 200px;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  margin: 1rem;
  border: none;
  background: ${color.secondary};
  font-size: 1rem;
  text-align: center;
`;

const SocialLabel = styled.div`
  color: ${color.primary};
  text-transform: uppercase;
  margin-left: 1rem;
`;
