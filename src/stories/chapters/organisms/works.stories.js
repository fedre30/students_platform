import React from "react";
import { storiesOf } from "@storybook/react";
import { WorksSections } from "../../../components/organisms/works-section";

export const doc = `
\`\`\`
import { WorksSections } from "../../../components/organisms/works-section";
\`\`\`
`;

storiesOf("Organisms|WorksSections", module)
  .addParameters({
    readme: {
      content: doc,
    },
  })
  .add("default", () => {
    return <WorksSections />;
  });
