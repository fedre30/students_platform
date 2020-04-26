import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { CustomModal } from "../../../components/molecules/modal";
import image from "../../../assets/images/work-1.jpg";

export const doc = `
\`\`\`
import { CustomModal } from "../../../components/molecules/modal";
\`\`\`
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.6);
  padding: 6rem 0;

  & > div {
    width: 50%;
  }
`;

storiesOf("Molecules|Modal", module)
  .addParameters({
    readme: {
      content: doc,
    },
  })
  .add("default", () => {
    return (
      <ModalContainer>
        <CustomModal
          title="Modal title"
          thumbnail={image}
          description="Modal description"
        />
      </ModalContainer>
    );
  });
