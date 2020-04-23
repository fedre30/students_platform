import React from "react";
import styled from "styled-components";
import work1 from "../../assets/images/work-1.jpg";
import work2 from "../../assets/images/work-2.jpg";
import { WorkCard } from "../molecules/work-card";
import { color } from "../../assets/const";
import { Layout } from "../atoms/layout";
import { Grid } from "../atoms/grid";

export const WorksSections = ({ member, setMember }) => {
  return (
    <WorkContainer id="works">
      <Layout>
        <Grid>
          <WorkCard imgUrl={work1} title="01 : Lorem Ipsum" />
          <WorkCard imgUrl={work2} title="02 : Lorem Ipsum" />
        </Grid>
      </Layout>
    </WorkContainer>
  );
};

const WorkContainer = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${color.secondary};
`;
