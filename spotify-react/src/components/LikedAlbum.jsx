import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button, Container, Row, Card, Col } from "react-bootstrap";

import { useState } from "react";

import { removeFromFavoritesAction } from "../redux/actions";

const LikedAlbum = () => {
  const [showShow, setShowShow] = useState(false);
  const toggleShow = () => setShowShow(!showShow);
  let favorite = useSelector((state) => state.favoriteAlbum.content);
  const dispatch = useDispatch();
  return (
    <>
      <Container>
        <h1 className="text-center">Favorites</h1>
        <Row>
          {favorite.map((fav, i) => (
            <>
              <Col xs={4}>
                <Card style={{ height: "200px", width: "200px" }}>
                  <Card.Img variant="top" src={fav.album.cover_medium} />
                  <Card.Body>
                    <Card.Title>{fav.album.title}</Card.Title>
                    <Card.Text>
                      <small>{fav.artist.name}</small>
                      <Button
                        className="ml-5"
                        variant="danger"
                        onClick={() => {
                          dispatch(removeFromFavoritesAction(i));
                        }}
                      >
                        <FaTrash />
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              {/* <tr key={i}>
                  {/* <td>
                    <Link to={`/${fav.company_name}`}>{fav.company_name} </Link>
                  </td> */}
              {/* <td>{fav.album.title}</td>
                  <td>{fav.artist.name}</td>

                  <td>
                    <Button
                      className="ml-5"
                      variant="danger"
                      onClick={() => {
                        dispatch(removeFromFavoritesAction(i));
                      }}
                    >
                      <FaTrash />
                    </Button> */}
              {/* </td>
                </tr> */}{" "}
            </>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default LikedAlbum;
