import React from "react";
import styled from "styled-components";

export const TitleContainer = ({ children }) => (
  <Container>{children}</Container>
);

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10rem;
  margin: 3rem 0;
`;
