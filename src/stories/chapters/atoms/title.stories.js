import React from "react";
import { storiesOf } from "@storybook/react";
import { Title } from "../../../components/atoms/title";

const doc = `
\`\`\`
import { Title } from "styles/atoms";
\`\`\`
`;

storiesOf("Atoms|Title", module)
  .addParameters({
    readme: {
      content: doc,
    },
  })
  .add("content", () => {
    return <Title content="Custom text" />;
  });
