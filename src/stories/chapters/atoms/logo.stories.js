import React from "react";
import { storiesOf } from "@storybook/react";
import { Logo } from "../../../components/atoms/logo";

const doc = `
\`\`\`
import { Logo } from "../../../components/atoms/logo";
\`\`\`
`;

storiesOf("Atoms|Logo", module)
  .addParameters({
    readme: {
      content: doc,
    },
  })
  .add("content", () => {
    return <Logo />;
  });

