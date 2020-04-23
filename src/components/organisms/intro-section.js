import React from "react";
import styled from "styled-components";
import { PageTitle } from "../atoms/title";
import { SubTitle } from "../atoms/subtitle";
import backgroundPicture from "../../assets/images/noodle_bg.png"

export const IntroSection = () => {
  return (
    <IntroContainer>
      <div className="text">
          <PageTitle content="GROUP 5 - SCHOOL PROJECT" />
          <SubTitle content="creating a new project" alignment="left" />
      </div>
      <img src={backgroundPicture} alt="ramen drawing" />
    </IntroContainer>
  );
};

const IntroContainer = styled.div`
  padding: 0 95px 0;
  position: relative;
  width: auto;
  height: calc(100vh - 110px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: no-wrap;
  .text {
    position: relative;
    z-index: 2;
  }
  img {
    position: relative;
    z-index: 1;
    margin-left: -300px;
  }
`;
