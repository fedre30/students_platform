import React from "react";
import { storiesOf } from "@storybook/react";
import { IntroSection } from "../../../components/organisms/intro-section.js";

export const doc = `
\`\`\`
import { IntroSection } from "../../../components/organisms/intro-section.js";
\`\`\`
`;

storiesOf("Organisms|IntroSection", module)
  .addParameters({
    readme: {
      content: doc,
    },
  })
  .add("default", () => {
    return <IntroSection />;
  });
