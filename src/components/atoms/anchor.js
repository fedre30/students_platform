import React from "react";
import styled from "styled-components";
import { color } from "../../assets/const";

export const Anchor = ({ label, url }) => {
  return (
    <>
      <Link href={`#${url}`}>{label}</Link>
    </>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: ${color.primary};
`;
