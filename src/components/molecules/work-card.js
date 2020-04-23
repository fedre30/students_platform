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

  const descriptionTest =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at finibus nunc, non congue lectus. Praesent venenatis libero eget sem posuere, eu dictum elit scelerisque. Aenean vitae laoreet urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec finibus odio nec diam tempor, sit amet blandit ex euismod. Etiam non metus congue, feugiat dolor vel, accumsan est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut rhoncus dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at finibus nunc, non congue lectus. ";
  return (
    <Container onClick={() => setOpenModal(!openModal)}>
      <Picture imgUrl={imgUrl} />
      <CustomTitle content={title} style={{ fontSize: "3rem" }} />
      <CustomModal
        title={title}
        thumbnail={imgUrl}
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        description={descriptionTest}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
`;

const CustomTitle = styled(Title)`
  margin-top: 2rem;
`;
