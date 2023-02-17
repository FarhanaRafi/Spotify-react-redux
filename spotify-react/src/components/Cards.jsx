import React from "react";

const Cards = ({ card }) => {
  return (
    <div className="goodMorning ">
      {/* <div className="col-2 m-3 p-0 good-morning-content d-flex align-items-center">
        <img
          className="col-5 pl-0 good-morning-img "
          src={card.album.cover_small}
          alt="card"
        />
        <div className="good-morning-singer">{card.artist.name}</div>
      </div> */}
      <div
        className="card card-side bg-gray-600  shadow-xl  mb-3 "
        style={{ width: "250px", height: "70px" }}
      >
        <figure>
          <img src={card.album.cover_small} alt="Movie" />
        </figure>
        <div className="card-body">
          <h4 className="card-title name">{card.artist.name}</h4>
        </div>
      </div>
    </div>
  );
};

export default Cards;
