import React from "react";
import styled from "styled-components";
import { Header } from "../molecules/header";
import { SubTitle } from "../atoms/subtitle";
import { Title } from "../atoms/title";
import { Picture } from "../atoms/picture";
import { Text } from "../atoms/text";
import group from "../../assets/images/group.jpg";
import { Layout } from "../atoms/layout";
import { Grid } from "../atoms/grid";
import { TitleContainer } from "../molecules/title-container";

export const AboutSection = ({ member, setMember }) => {
  return (
    <Layout id="about">
      <AboutContainer>
        <HeaderContainer>
          <Header setMember={setMember} />
        </HeaderContainer>
        <TitleContainer>
          <div>
            <StyledSubtitle
              content={member === 1 ? "OUR STORY, OUR GROUP." : "MY STORY"}
              align="left"
            />
          </div>
          <div>
            <Title
              content={member === 1 ? "about us" : "about me"}
              align="left"
            />
          </div>
        </TitleContainer>
        <Grid>
          <div style={{ width: "100%" }}>
            <Picture imgUrl={group} />
          </div>
          <div style={{ width: "100%" }}>
            <Text style={{ width: "70%" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
              egestas risus. Nam dignissim tellus et quam viverra bibendum.
              Praesent vel mi vitae sem efficitur porta vel sit amet orci. Proin
              quam purus, lobortis quis porttitor in, consequat maximus elit.
              Quisque interdum nunc quis suscipit tempus. Fusce tempus ex in
              enim sagittis hendrerit. Nunc odio elit, volutpat sed nunc sed,
              lobortis rhoncus nulla. Phasellus vitae metus sed ligula ornare
              vehicula. Sed finibus mollis commodo.
            </Text>
          </div>
        </Grid>
      </AboutContainer>
    </Layout>
  );
};

const AboutContainer = styled.section`
  width: 100%;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
`;

const StyledSubtitle = styled(SubTitle)`
  margin: 2rem 0;
`;
