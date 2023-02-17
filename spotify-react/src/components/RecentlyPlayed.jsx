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
        {error && <Alert variant="danger">Something went wrong</Alert>}
        {loadingSpinner && (
          <Spinner animation="border" variant="success" className="spinners" />
        )}
        <Row className="md:flex gap-2 flex-wrap">
          {podcastFromRedux.map((card) => {
            console.log(card, "gggggg");
            return (
              <Col xs={3} key={card.id}>
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
