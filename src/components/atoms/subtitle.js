import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SubTitleStyle = styled.h3`
  font-family: "Poppins", cursive;
  font-weight: 600;
  font-size: 18px;
  line-height: 80px;
  color: #865a5a;
  text-align: left;
  letter-spacing: 0.15em;
`;

export const SubTitle = ({ content, alignment }) => (
  <SubTitleStyle alignment={alignment}>{content}</SubTitleStyle>
);

SubTitle.displayName = "Subtitle";

SubTitle.defaultProps = {
  alignment: "center",
};

SubTitle.propTypes = {
  alignment: PropTypes.oneOf(["left", "center", "right"]),
  content: PropTypes.string.isRequired,
};
