import React from "react";

const SmallCard = ({ card }) => {
  return (
    <div className="bg-secondary small-container mt-2 ml-4">
      <div className="good-morning-content d-flex align-items-center">
        <img
          className=" good-morning-img "
          src={card.album.cover_medium}
          alt=""
        />
        <div className="good-morning-singer text-white">{card.artist.name}</div>
      </div>
    </div>
  );
};

export default SmallCard;
