import React from "react";
import { Row, Col } from "react-bootstrap";
import rate from "../../images/rate.png";
const RateItem = ({ item }) => {
  if (!item || !item.ratings) {
    return null;
  }
  // console.log(item);
  return (
    <div>
      <Row className="mt-3">
        <Col className="d-felx me-5">
          <div className="rate-name  d-inline ms-2">{item.user.name}</div>
          <img className="" src={rate} alt="" height="16px" width="16px" />
          <div className="cat-rate  d-inline  p-1 pt-2">{item.ratings}</div>
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-felx me-4 pb-2">
          <div className="rate-description  d-inline ms-2">{item.title}</div>
        </Col>
      </Row>
    </div>
  );
};

export default RateItem;
