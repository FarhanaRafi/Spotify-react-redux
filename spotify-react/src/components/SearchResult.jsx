// import React from "react";

// const SearchResult = () => {

//   return <div>

//   </div>;
// };

// export default SearchResult;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchAsync } from "../redux/actions";
import { Alert, Spinner, Row, Col } from "react-bootstrap";
import BigCard from "./BigCard";

const SearchResult = ({ query }) => {
  const searchFromRedux = useSelector((state) => state.result.search);
  const loadingSpinner = useSelector((state) => state.album.isLoading);
  const error = useSelector((state) => state.album.isError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearchAsync(query));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {" "}
      <>
        <h1 className="text-white text-start mb-4">Podcasts You Might enjoy</h1>
        {error && <Alert variant="danger">Something went wrong</Alert>}
        {loadingSpinner && (
          <Spinner animation="border" variant="success" className="spinners" />
        )}
        <Row>
          {searchFromRedux.map((card) => {
            console.log(card, "gggggg");
            return (
              <Col xs={2} key={card.id} className="mb-3">
                <BigCard card={card} />
              </Col>
            );
          })}
        </Row>
      </>
    </div>
  );
};

export default SearchResult;
