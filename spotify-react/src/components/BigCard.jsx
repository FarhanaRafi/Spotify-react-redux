import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavoritesAction,
  removeFromFavoritesAction,
  getSelectedSongAsync,
} from "../redux/actions";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

const BigCard = ({ card }) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const getFavRedux = useSelector((state) => state.likes.likedSongs);

  useEffect(() => {
    let likedIds = getFavRedux.map((value) => value.id);
    if (likedIds.includes(card.id)) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, []);

  return (
    <Card
      onClick={(e) => {
        dispatch(getSelectedSongAsync(card));
      }}
      className="ml-4 cardHover"
    >
      <Card.Img variant="top" src={card.album.cover_medium} />
      <Card.Body className="background cardHover">
        <AiOutlineHeart
          color={active ? "red" : "black"}
          onClick={() => {
            if (!active) {
              setActive(true);
              dispatch(addToFavoritesAction(card));
            } else {
              setActive(false);
              dispatch(removeFromFavoritesAction(card));
            }
          }}
        />

        <Card.Title className="title">{card.album.title}</Card.Title>
        <Card.Text className="artist-name">
          <small>{card.artist.name}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BigCard;
