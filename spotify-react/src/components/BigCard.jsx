import React from "react";
import { Card } from "react-bootstrap";

const BigCard = ({ card }) => {
  return (
    <Card style={{ height: "200px", width: "200px" }}>
      <Card.Img variant="top" src={card.album.cover_medium} />
      <Card.Body className="background">
        <Card.Title className="title">{card.album.title}</Card.Title>
        <Card.Text>
          <small>{card.artist.name}</small>
        </Card.Text>
      </Card.Body>
    </Card>
    // <div>
    //   <div className="col mb-4">
    //     <div className="card h-100" id="{card.album.id}">
    //       <div className="play-btn-container">
    //         <img
    //           src={card.album.cover_medium}
    //           className="card-img-top"
    //           alt="..."
    //         />
    //       </div>
    //       <div className="card-body">
    //         <h5 className="card-title">{card.album.title}</h5>
    //         <p className="card-text text-muted mt-n2">
    //           <small>{card.artist.name}</small>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default BigCard;
