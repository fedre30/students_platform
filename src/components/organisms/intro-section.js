import React from "react";
import styled from "styled-components";
import { PageTitle } from "../atoms/title";
import { SubTitle } from "../atoms/subtitle";

export const IntroSection = () => {
  return (
    <IntroContainer>
      <SubTitle content="GROUP 5 - SCHOOL PROJECT" alignment="left" />
      <PageTitle content="creating a new project" />
    </IntroContainer>
  );
};

const IntroContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
