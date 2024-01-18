import React from "react";
import "./top_picks.css";
import Filter from "../common/filters/Filter";
import TPCollections from "./TPCollections/TPCollections";
import TopBrands from "./TopBrands";
import ExploreSection from "../common/exploreSection/ExploreSection";

const topPicks = [
  {
    id: 1,
    title: "Filters",
  },
  {
    id: 2,
    title: "Most Liked",
  },
  {
    id: 3,
    title: "Most Viewed",
  },
];
function TopPicks(props) {
  return (
    <div>
      <div className={"max-width"}>
        <Filter filters={topPicks} />
      </div>
      <TPCollections />
      <TopBrands />
      <ExploreSection />
    </div>
  );
}

export default TopPicks;
