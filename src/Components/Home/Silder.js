import React, { useState } from "react";
import {
  Navbar,
  Container,
  Carousel,
  FormControl,
  Nav,
  Row,
  Col,
} from "react-bootstrap";

// import sliderimg from "../../images/slider1.png";
// import slider4 from "../../images/slider4.png";
// import prod3 from "../../images/prod3.png";
// import prod4 from "../../images/prod4.png";
import slider1 from "../../images/slider-gamingPC.png";
import slider2 from "../../images/slider-kitchen.png";
import slider3 from "../../images/slider-perfume.png";
import slider4 from "../../images/slider-phone.png";

const Silder = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const data = [
    {
      image: slider1,
      text: "Computers",
      to: "66ddd5b073e0e35815da7b44",
    },
    {
      image: slider2,
      text: "Kitchen tools",
      to: "66ddc95593e227fe476cb876",
    },
    {
      image: slider3,
      text: "Perfumes",
      to: "66de9736fcef426e661ec247",
    },
    {
      image: slider4,
      text: "Phones",
      to: "66f174406cd2a8ad56005a6e",
    },
  ];
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((item, index) => {
        return (
          <Carousel.Item
            className={`slider-background${index + 1}`}
            interval={2000}
          >
            <Container>
              <Row className="align-items-center">
                <Col md={6} className="d-flex justify-content-center">
                  <img className="image" src={item.image} alt="First slide" />
                </Col>
                <Col md={6}>
                  <div className="slider-info">
                    <h3 className="slider-title">Today's opponents</h3>
                    <p className="slider-text">
                      Fantastic discounts of up to 50% on {`${item.text}`}
                    </p>
                    <a
                      href={`/products/category/${item.to}`}
                      className="slider-button"
                    >
                      Find out more
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Silder;
