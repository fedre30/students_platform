import React from "react";
import styled from "styled-components";
import { color } from "../../assets/const";

export const Anchor = ({ label, url, style }) => {
  return (
    <>
      <Link href={`#${url}`} style={style}>
        {label}
      </Link>
    </>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: ${color.primary};
`;
