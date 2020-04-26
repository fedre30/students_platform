import React from "react";
import { storiesOf } from "@storybook/react";
import { SubTitle } from "../../../components/atoms/subtitle";

const doc = `
\`\`\`
import { SubTitle } from "../../../components/atoms/title";
\`\`\`
`;

storiesOf("Atoms|SubTitle", module)
  .addParameters({
    readme: {
      content: doc,
    },
  })
  .add("content", () => {
    return <SubTitle content="Custom text" />;
  });

