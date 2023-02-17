import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { Button, Row, Card, Col } from "react-bootstrap";

import { removeFromFavoritesAction } from "../redux/actions";

const LikedAlbum = () => {
  let favorite = useSelector((state) => state.favoriteAlbum.content);
  const dispatch = useDispatch();
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          marginLeft: "15%",
          marginTop: "60px",
          height: "100vh",
        }}
      >
        <h1 className="text-center text-white">Favorites</h1>
        <Row className="">
          {favorite.map((card, i) => {
            return (
              <Col xs={6} md={2} key={card.id}>
                <Card>
                  <Card.Img variant="top" src={card.album.cover_medium} />
                  <Card.Body className="background">
                    <Button
                      className="ml-5"
                      variant="danger"
                      onClick={() => {
                        dispatch(removeFromFavoritesAction(i));
                      }}
                    >
                      <FaTrash />
                    </Button>
                    <Card.Title className="title">
                      {card.album.title}
                    </Card.Title>
                    <Card.Text className="artist-name">
                      <small>{card.artist.name}</small>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default LikedAlbum;
