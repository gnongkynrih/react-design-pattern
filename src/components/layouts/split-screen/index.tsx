import React from "react";
import { SplitScreen } from "./split-screen";

const LeftSideComponent = () => {
  return <h1 style={{ background: "brown" }}>Left Side</h1>;
};
const RightSideComponent = () => {
  return <h1 style={{ background: "purple" }}>Right Side</h1>;
};
const SplitScreenIndex = () => {
  return (
    <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftSideComponent />
      <RightSideComponent />
    </SplitScreen>
  );
};
export default SplitScreenIndex;
