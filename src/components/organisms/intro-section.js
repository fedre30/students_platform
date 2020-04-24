import React from "react";
import styled from "styled-components";
import { PageTitle } from "../atoms/title";
import { SubTitle } from "../atoms/subtitle";
import backgroundPicture from "../../assets/images/noodle_bg.png";
import { Layout } from "../atoms/layout";

export const IntroSection = () => {
  return (
    <section id="home">
      <Layout>
        <IntroContainer>
          <div className="text">
            <SubTitle content="GROUP 5 - SCHOOL PROJECT" />
            <PageTitle content="creating a new project" alignment="left" />
          </div>
          <img src={backgroundPicture} alt="ramen drawing" />
        </IntroContainer>
      </Layout>
    </section>
  );
};

const IntroContainer = styled.div`
  position: relative;
  width: auto;
  height: calc(100vh - 110px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: no-wrap;
  .text {
    position: relative;
    z-index: 1;
  }
  img {
    position: relative;
    margin-left: -300px;
  }
`;
