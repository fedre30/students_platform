import React from "react";
import { storiesOf } from "@storybook/react";
import { Navbar } from "../../../components/molecules/navbar";

export const doc = `
\`\`\`
import { Navbar } from "../../../components/molecules/navbar";
\`\`\`
`;

storiesOf("Molecules|Navbar", module)
  .addParameters({
    readme: {
      content: doc,
    },
  })
  .add("default", () => {
    return (
      <Navbar />
    );
  });
