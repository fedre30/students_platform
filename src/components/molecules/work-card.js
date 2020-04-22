import React, { useState } from "react";
import styled from "styled-components";
import { Title } from "../atoms/title";
import { Picture } from "../atoms/picture";
import { CustomModal } from "./modal";

export const WorkCard = ({
  imgUrl,
  title,
  description,
  detailsTitle,
  details,
}) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Container onClick={() => setOpenModal(!openModal)}>
      <Picture imgUrl={imgUrl} />
      <CustomTitle content={title} />
      <CustomModal
        title={title}
        thumbnail={imgUrl}
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
`;

const CustomTitle = styled(Title)`
  margin-top: 2rem;
`;
