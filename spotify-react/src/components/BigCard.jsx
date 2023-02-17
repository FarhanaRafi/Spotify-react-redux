import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToFavoritesAction, getSelectedSongAsync } from "../redux/actions";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

const BigCard = ({ card }) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const getFavRedux = useSelector((state) => state.likes.likedSongs);

  const isfav = (id) => {
    if (getFavRedux.includes(id)) {
      return true;
    } else {
      return false;
    }
  };

  const buttonClick = () => {
    setActive(!active);
  };
  return (
    <Card
      style={{ height: "200px", width: "200px" }}
      onClick={(e) => {
        dispatch(getSelectedSongAsync(card));
        console.log(card, "selected");
      }}
    >
      <Card.Img variant="top" src={card.album.cover_medium} />
      <Card.Body className="background">
        {isfav ? (
          <AiOutlineHeart
            color={active ? "red" : "black"}
            onClick={() => {
              setActive(true);
              dispatch(addToFavoritesAction(card));
            }}
          />
        ) : (
          <AiOutlineHeart
            color={active ? "red" : "black"}
            onClick={() => {
              buttonClick();
              dispatch(addToFavoritesAction(card));
            }}
          />
        )}

        <Card.Title className="title">{card.album.title}</Card.Title>
        <Card.Text className="artist-name">
          <small>{card.artist.name}</small>
        </Card.Text>
      </Card.Body>
    </Card>
    // <div>
    //   <div className="col mb-4">
    //     <div className="card h-100" id="{card.album.id}">
    //       <div className="play-btn-container">
    //         <img
    //           src={card.album.cover_medium}
    //           className="card-img-top"
    //           alt="..."
    //         />
    //       </div>
    //       <div className="card-body">
    //         <h5 className="card-title">{card.album.title}</h5>
    //         <p className="card-text text-muted mt-n2">
    //           <small>{card.artist.name}</small>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default BigCard;
