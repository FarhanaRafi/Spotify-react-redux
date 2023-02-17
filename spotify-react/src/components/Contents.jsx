import React from "react";
import GoodMorning from "./GoodMorning";
import RecentlyPlayed from "./RecentlyPlayed";
import Favorite from "./Favorite";
import { useSelector } from "react-redux";
import SearchResult from "./SearchResult";

const Contents = () => {
  const showSearchRedux = useSelector((state) => state.showSearch.result);
  return (
    <div
      style={{
        backgroundColor: "black",
        marginLeft: "15%",
      }}
    >
      {!showSearchRedux ? (
        <>
          <GoodMorning />
          <RecentlyPlayed />
          <Favorite />
        </>
      ) : (
        <SearchResult />
      )}
    </div>
  );
};

export default Contents;
