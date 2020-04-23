import React from "react";
import styled from "styled-components";
import { color } from "../../assets/const";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Anchor = ({ label, url, style }) => {
  return (
    <>
      <Link href={`#${url}`} style={style}>
        {label}
      </Link>
    </>
  );
};

const Link = styled(AnchorLink)`
  text-decoration: none;
  color: ${color.primary};
`;
