import React from "react";
import { storiesOf } from "@storybook/react";
import { AboutSection } from "../../../components/organisms/about-section";

export const doc = `
\`\`\`
import { AboutSection } from "../../../components/organisms/about-section";
\`\`\`
`;

storiesOf("Organisms|AboutSection", module)
  .addParameters({
    readme: {
      content: doc,
    },
  })
  .add("default", () => {
    return <AboutSection />;
  });
