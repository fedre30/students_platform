import React from "react";
import styled from "styled-components";

export const Text = ({ children, style }) => {
  return <TextContainer style={style}>{children}</TextContainer>;
};

const TextContainer = styled.div`
  font-family: "Poppins";
  line-height: 1.8rem;
  max-width: 100%;
  text-align: left;
`;
