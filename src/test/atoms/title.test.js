import React from "react";
import { create } from "react-test-renderer";
import { Title } from "../../components/atoms/title";

describe("Title component", () => {
  test("Matches the snapshot", () => {
    const button = create(<Title content="test" />);
    expect(button.toJSON()).toMatchSnapshot();
  });
});
