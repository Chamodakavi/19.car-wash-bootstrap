import React from "react";
import { Card } from "react-bootstrap";

const ServiceCard = ({ card }) => {
  return (
    <Card className="service-card my-4 bg-light">
      <img src={card.img} alt="Service" />
        <h5 className="service-title mt-4 fs-3"
            style={{
                letterSpacing:'0.7rem'
            }}
        >{card.title1}</h5>
        <div className="outline">
            <div className="crd-body fs-6">
                <p>{card.p}</p>
                <h2>{card.title2}</h2>
                <p> {card.p1}</p>
                <p> {card.p2}</p>
                <p> {card.p3}</p>
            </div>
        </div>
      
    </Card>
  );
};

export default ServiceCard;
