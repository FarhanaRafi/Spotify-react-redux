import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlbumsAsync } from "../redux/actions";
import { Alert, Spinner, Row, Col } from "react-bootstrap";
import SmallCard from "./SmallCard";
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
      <h3 className="text-white text-start mt-5 pt-4">Good Morning, Farhana</h3>
      {error && <Alert variant="danger">Something went wrong</Alert>}
      {loadingSpinner && (
        <Spinner animation="border" variant="success" className="spinners" />
      )}
      <Row className="md:flex gap-2 flex-wrap">
        {albumFromRedux.map((card) => {
          return (
            <Col xs={6} md={4} lg={3} key={card.id}>
              <SmallCard card={card} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default GoodMorning;
