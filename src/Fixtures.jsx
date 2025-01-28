import React from "react";
import Navbar from "./components/Navbar";
import FixtureComponent from "./components/Fixtures/FixtureComponent.jsx";

const Fixtures = () => {
  return (
    <div className="w-full relative">
      <Navbar />
      <FixtureComponent />
    </div>
  );
};

export default Fixtures;
