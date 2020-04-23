import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SubTitleStyle = styled.h3`
  font-family: "Abril Fatface", cursive;
  font-size: 80px;
  width: 450px;
  line-height: 80px;
  color: #865a5a;
  text-align: ${(props) => (props.alignment ? props.alignment : "left")};
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
