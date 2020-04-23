import React from "react";
import { create } from "react-test-renderer";
import { Title } from "../../components/atoms/title";

describe("Title component", () => {
  test("Matches the snapshot", () => {
    const title = create(<Title content={"test"} />);
    expect(title.toJSON()).toMatchSnapshot();
  });
});
