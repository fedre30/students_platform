import React from "react";
import { storiesOf } from "@storybook/react";
import { Social } from "../../../components/molecules/social";
import imgUrl from "../../../assets/images/github.svg"

export const doc = `
\`\`\`
import { Social } from "../../../components/molecules/social";
\`\`\`
`;

storiesOf("Molecules|Social", module)
  .addParameters({
    readme: {
      content: doc,
    },
  })
  .add("default", () => {
    return (
      <Social
        logo={imgUrl}
        label="Github"
        link="https://github.com/fedre30/students_platform"
      />
    );
  });
