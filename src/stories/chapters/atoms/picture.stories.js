import React from "react";
import { storiesOf } from "@storybook/react";
import { Picture } from "../../../components/atoms/picture";
import imgUrl from "../../../assets/images/ramen.svg"

const doc = `
\`\`\`
import { Picture } from "../../../components/atoms/picture";
\`\`\`
`;

storiesOf("Atoms|Picture", module)
  .addParameters({
    readme: {
      content: doc,
    },
  })
  .add("content", () => {
    return <Picture imgUrl={imgUrl}/>;
  });

