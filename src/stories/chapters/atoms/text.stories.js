import React from "react";
import { storiesOf } from "@storybook/react";
import { Text } from "../../../components/atoms/text";

const doc = `
\`\`\`
import { Text } from "../../../components/atoms/text";
\`\`\`
`;

storiesOf("Atoms|Text", module)
  .addParameters({
    readme: {
      content: doc,
    },
  })
  .add("content", () => {
    return <Text children="Text" />;
  });

