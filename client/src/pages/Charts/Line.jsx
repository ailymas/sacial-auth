import React from "react";

import { Header } from "../../components";
import { LineChart } from "../../components";
const Line = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="charts" title="Line" />

      <LineChart />

    </div>
  );
};

export default Line;
