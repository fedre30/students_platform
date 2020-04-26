import React from "react";
import { storiesOf } from "@storybook/react";
import { Thumbnail } from "../../../components/atoms/thumbnail";
import imgUrl from "../../../assets/images/ramen.svg"


const doc = `
\`\`\`
import { Thumbnail } from "../../../components/atoms/thumbnail";
\`\`\`
`;

storiesOf("Atoms|Thumbnail", module)
  .addParameters({
    readme: {
      content: doc,
    },
  })
  .add("content", (props) => {
    return <Thumbnail imgUrl={imgUrl} setMember={props.onClick} />;
  });

