import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteAsync } from "../redux/actions";
import { Alert, Spinner, Row, Col } from "react-bootstrap";
import BigCard from "./BigCard";

const Favorite = () => {
  const favoriteFromRedux = useSelector((state) => state.favorite.favorites);
  const loadingSpinner = useSelector((state) => state.album.isLoading);
  const error = useSelector((state) => state.album.isError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoriteAsync("rock"));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="favorite">
      <>
        <h3 className="text-white text-start mb-4">Favorites</h3>
        {error && <Alert variant="danger">Something went wrong</Alert>}
        {loadingSpinner && (
          <Spinner animation="border" variant="success" className="spinners" />
        )}
        <Row className="">
          {favoriteFromRedux.map((card) => {
            return (
              <Col xs={6} md={2} key={card.id}>
                <BigCard card={card} />
              </Col>
            );
          })}
        </Row>
      </>
    </div>
  );
};

export default Favorite;
