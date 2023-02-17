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
      {console.log("album", albumFromRedux)}

      {error && <Alert variant="danger">Something went wrong</Alert>}
      {loadingSpinner && (
        <Spinner animation="border" variant="success" className="spinners" />
      )}
      <Row>
        {albumFromRedux.map((card) => {
          console.log(card, "gggggg");
          return (
            <Col xs={4}>
              <Cards card={card} key={card.id} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default GoodMorning;
