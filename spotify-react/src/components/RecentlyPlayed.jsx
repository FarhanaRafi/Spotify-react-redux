import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPodcastAsync } from "../redux/actions";
import { Alert, Spinner, Row, Col } from "react-bootstrap";
import BigCard from "./BigCard";

const RecentlyPlayed = () => {
  const podcastFromRedux = useSelector((state) => state.podcast.podcasts);
  const loadingSpinner = useSelector((state) => state.album.isLoading);
  const error = useSelector((state) => state.album.isError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPodcastAsync("podcasts"));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {" "}
      <>
        <h3 className="text-white text-start mb-4 mt-5">
          Podcasts You Might enjoy
        </h3>
        {error && <Alert variant="danger">Something went wrong</Alert>}
        {loadingSpinner && (
          <Spinner animation="border" variant="success" className="spinners" />
        )}
        <Row className="">
          {podcastFromRedux.map((card) => {
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

export default RecentlyPlayed;
