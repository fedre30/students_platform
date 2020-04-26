import React from "react";
import { storiesOf } from "@storybook/react";
import { WorkCard } from "../../../components/molecules/work-card";
import imgUrl from "../../../assets/images/work-1.jpg"

export const doc = `
\`\`\`
import { WorkCard } from "../../../components/molecules/social";
\`\`\`
`;

storiesOf("Molecules|WorkCard", module)
  .addParameters({
    readme: {
      content: doc,
    },
  })
  .add("default", () => {
    return (
      <WorkCard
        imgUrl={imgUrl}
        title="Work #1"
        description="Work description"
        detailsTitle="Details title"
        details="Details"
      />
    );
  });
