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
  width: 400px;
  height: 400px;
  img {
    width: 100%;
  }
`;
