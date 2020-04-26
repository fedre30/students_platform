import React from "react";
import { storiesOf } from "@storybook/react";
import { Anchor } from "../../../components/atoms/anchor";

const doc = `
\`\`\`
import { Anchor } from "../../../components/atoms/anchor";
\`\`\`
`;

storiesOf("Atoms|Anchor", module)
  .addParameters({
    readme: {
      content: doc,
    },
  })
  .add("content", () => {
    return <Anchor label="Link" url="/#"/>;
  });

