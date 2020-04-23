import React from "react";
import { create } from "react-test-renderer";
import { WorkCard } from "../../components/molecules/work-card";

describe("Workcard component", () => {
  test("Matches the snapshot", () => {
    const card = create(
      <WorkCard title="test" description="Test description" />
    );
    expect(card.toJSON()).toMatchSnapshot();
  });
});
