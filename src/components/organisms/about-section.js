import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "../molecules/header";
import { SubTitle } from "../atoms/subtitle";
import { Title } from "../atoms/title";
import { Picture } from "../atoms/picture";
import { Text } from "../atoms/text";
import group from "../../assets/images/group.jpg";

export const AboutSection = () => {
  const [member, setMember] = useState(1);
  return (
    <AboutContainer>
      <Header setMember={setMember} />
      <SubTitle content={member === 1 ? "OUR STORY, OUR GROUP." : "MY STORY"} />
      <Title content={member === 1 ? "about us" : "about me"} />
      <AboutContent>
        <Picture imgUrl={group} />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at egestas
          risus. Nam dignissim tellus et quam viverra bibendum. Praesent vel mi
          vitae sem efficitur porta vel sit amet orci. Proin quam purus,
          lobortis quis porttitor in, consequat maximus elit. Quisque interdum
          nunc quis suscipit tempus. Fusce tempus ex in enim sagittis hendrerit.
          Nunc odio elit, volutpat sed nunc sed, lobortis rhoncus nulla.
          Phasellus vitae metus sed ligula ornare vehicula. Sed finibus mollis
          commodo.
        </Text>
      </AboutContent>
    </AboutContainer>
  );
};

const AboutContainer = styled.section`
  width: 100%;
`;

const AboutContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
