import React from "react";
import styled from "styled-components";

export const Text = ({ children }) => {
  return <TextContainer>{children}</TextContainer>;
};

const TextContainer = styled.div`
  font-family: "Poppins";
  line-height: 1.2rem;
`;
