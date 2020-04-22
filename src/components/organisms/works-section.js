import React from "react";
import styled from "styled-components";

import work1 from "../../assets/images/work-1.jpg";
import work2 from "../../assets/images/work-2.jpg";
import { WorkCard } from "../molecules/work-card";

export const WorksSections = ({ member, setMember }) => {
  return (
    <WorkContainer>
      <WorkCard imgUrl={work1} title="01 : Lorem Ipsum" />
      <WorkCard imgUrl={work2} title="02 : Lorem Ipsum" />
    </WorkContainer>
  );
};

const WorkContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
