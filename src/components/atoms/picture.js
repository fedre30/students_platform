import React from "react";
import styled from "styled-components";

export const Picture = ({ imgUrl }) => {
  return (
    <PictureContainer>
      <img src={imgUrl} alt="background" />
    </PictureContainer>
  );
};

const PictureContainer = styled.div`
  max-width: 800px;
  max-height: 800px;
  img {
    width: 100%;
  }
`;
