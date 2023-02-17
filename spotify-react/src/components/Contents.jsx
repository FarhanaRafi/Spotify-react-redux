import React from "react";
import GoodMorning from "./GoodMorning";
import RecentlyPlayed from "./RecentlyPlayed";
import Favorite from "./Favorite";

const Contents = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        marginLeft: "15%",
      }}
    >
      <GoodMorning />
      <RecentlyPlayed />
      <Favorite />
    </div>
  );
};

export default Contents;
