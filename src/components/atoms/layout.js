import React from "react";
import styled from "styled-components";

export const Layout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  padding: 3rem;
`;
