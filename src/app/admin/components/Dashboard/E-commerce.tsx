"use client";
import React, { useState } from "react";
import ChartThree from "../Charts/ChartThree";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
// import MapOne from "../Maps/MapOne";
import DataStatsOne from "../../components/DataStats/DataStatsOne";
import DataStatsTwo from "../../components/DataStats/DataStatsTwo";
import ChartOne from "../../components/Charts/ChartOne";
import PanelNavigation from "../../components/DataStats/cardTwo";

const ECommerce: React.FC = () => {
  const [activePanel, setActivePanel] = useState<"customer" | "brand">("brand");

  const handlePanelChange = (panel: "customer" | "brand") => {
    setActivePanel(panel);
  };

  return (
    <>
      <PanelNavigation activePanel={activePanel} onPanelChange={handlePanelChange} />
      <DataStatsOne />
      <DataStatsTwo />
      
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        {/* <ChartOne />
        <ChartTwo />
        <ChartThree /> */}
        {/* <MapOne /> */}
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </>
  );
};

export default ECommerce;
