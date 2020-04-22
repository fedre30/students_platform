import React from "react";
import Modal from "react-modal";
import { Title } from "../atoms/title";
import { Picture } from "../atoms/picture";
import { Text } from "../atoms/text";

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
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Work">
      <button onClick={onRequestClose}>close</button>
      <Title content={title} />
      <Picture imgUrl={thumbnail} />
      <Text>{description}</Text>
      <Title content={detailsTitle} />
      <Text>{details}</Text>
    </Modal>
  );
};
