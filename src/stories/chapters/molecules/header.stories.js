import React from "react";
import { storiesOf } from "@storybook/react";
import { Header } from "../../../components/molecules/header";

export const doc = `
\`\`\`
import { Header } from "../../../components/molecules/header";
\`\`\`
`;

storiesOf("Molecules|Header", module)
  .addParameters({
    readme: {
      content: doc,
    },
  })
  .add("default", () => {
    return (
      <Header />
    );
  });
