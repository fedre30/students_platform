import React from "react";
import styled from "styled-components";

export const Thumbnail = ({ id, imgUrl, setMember }) => {
  return (
    <ThumbnailContainer onClick={setMember}>
      <img src={imgUrl} alt="thumbnail" />
    </ThumbnailContainer>
  );
};

const ThumbnailContainer = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50px;
`;
