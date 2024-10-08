import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import laptops from "../../images/slider-gamingPC.png";
const DiscountSection = () => {
  return (
    <Container>
      <Row className="discount-backcolor my-3  mx-2 d-flex text-center align-items-center ">
        <Col sm="6" className="d-flex align-items-center w-fit m-auto">
          <div className="discount-title">Up to 50% off on electronics</div>
        </Col>
        <Col sm="6">
          <img className="dicount-img " src={laptops} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default DiscountSection;
