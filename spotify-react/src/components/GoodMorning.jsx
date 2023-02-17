import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlbumsAsync } from "../redux/actions";
import { Alert, Spinner, Row, Col } from "react-bootstrap";
import Cards from "./Cards";
// import { useDispatch } from "react-redux";

const GoodMorning = () => {
  const albumFromRedux = useSelector((state) => state.album.song);
  const loadingSpinner = useSelector((state) => state.album.isLoading);
  const error = useSelector((state) => state.album.isError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlbumsAsync("morning"));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {error && <Alert variant="danger">Something went wrong</Alert>}
      {loadingSpinner && (
        <Spinner animation="border" variant="success" className="spinners" />
      )}
      <Row className="md:flex gap-3 flex-wrap">
        {albumFromRedux.map((card) => {
          return (
            <Col xs={6} key={card.id}>
              <Cards card={card} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default GoodMorning;
