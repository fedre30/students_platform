import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const PageTitleStyle = styled.h1`
  font-family: "Abril Fatface", cursive;
  font-weight: 600;
  font-size: 18px;
  line-height: 80px;
  color: #865a5a;
  text-align: left;
`;

const TitleStyle = styled.h2`
  font-family: "Abril Fatface", cursive;
  font-weight: 600;
  font-size: 18px;
  line-height: 80px;
  color: #865a5a;
  text-align: center;
`;

export const Title = ({ content }) => <TitleStyle>{content}</TitleStyle>;
export const PageTitle = ({ content }) => {
  return <PageTitleStyle>{content}</PageTitleStyle>;
};

/* Will show the right 'tag' within documentation */
PageTitle.displayName = "Page Title";
Title.displayName = "Title";

Title.propTypes = {
  content: PropTypes.element.isRequired,
};

PageTitle.propTypes = {
  content: PropTypes.element.isRequired,
};
