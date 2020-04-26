import React from "react";
import { storiesOf } from "@storybook/react";
import { ContactSection } from "../../../components/organisms/contact-section";

export const doc = `
\`\`\`
import { ContactSection } from "../../../components/organisms/contact-section";
\`\`\`
`;

storiesOf("Organisms|ContactSection", module)
  .addParameters({
    readme: {
      content: doc,
    },
  })
  .add("default", () => {
    return <ContactSection />;
  });
