import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const PageTitleStyle = styled.h1`
  font-family: "Abril Fatface";
  font-size: 80px;
  max-width: 450px;
  line-height: 80px;
  color: #865a5a;
  text-align: ${(props) => (props.alignment ? props.alignment : "left")};
`;

const TitleStyle = styled.h2`
  font-family: "Abril Fatface";
  font-size: 80px;
  max-width: 450px;
  line-height: 80px;
  color: #865a5a;
  text-align: ${(props) => (props.alignment ? props.alignment : "left")};
`;

export const Title = ({ content, style }) => (
  <TitleStyle style={style}>{content}</TitleStyle>
);
export const PageTitle = ({ content, style }) => {
  return <PageTitleStyle style={style}>{content}</PageTitleStyle>;
};

/* Will show the right 'tag' within documentation */
PageTitle.displayName = "Page Title";
Title.displayName = "Title";

Title.propTypes = {
  content: PropTypes.string.isRequired,
};

PageTitle.propTypes = {
  content: PropTypes.string.isRequired,
};
