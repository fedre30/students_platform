import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { Title } from "../atoms/title";
import { Picture } from "../atoms/picture";
import { Text } from "../atoms/text";
import { color } from "../../assets/const";
import { Layout } from "../atoms/layout";
import { TitleContainer } from "./title-container";

export const CustomModal = ({
  title,
  thumbnail,
  description,
  detailsTitle,
  details,
  isOpen,
  onRequestClose,
}) => {
  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Work"
    >
      <Layout>
        <button onClick={onRequestClose}>X</button>
        <ModalContainer>
          <TitleContainer>
            <Title content={title || ""} />
          </TitleContainer>
          <Picture imgUrl={thumbnail} />
          <div style={{ width: "80%", marginTop: "2rem" }}>
            <Text>{description}</Text>
          </div>
          <TitleContainer>
            <Title content={detailsTitle || ""} />
          </TitleContainer>
          <div style={{ width: "80%", marginTop: "2rem" }}>
            <Text>{details}</Text>
          </div>
        </ModalContainer>
      </Layout>
    </StyledModal>
  );
};

const StyledModal = styled(Modal)`
  width: 80%;
  margin: 0 auto;
  background: ${color.background};
  color: ${color.tertiary};
  outline: none;
  overflow: hidden;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
