import React from "react";
import { create } from "react-test-renderer";
import { AboutSection } from "../../components/organisms/about-section";

describe("About section component", () => {
  test("Matches the snapshot", () => {
    const about = create(<AboutSection />);
    expect(about.toJSON()).toMatchSnapshot();
  });
});
