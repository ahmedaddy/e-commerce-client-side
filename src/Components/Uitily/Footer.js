import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import { FaPhone } from "react-icons/fa6";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="footer-background footer mt-3 pt-2"
      style={{ maxHeight: "50px" }}
    >
      <Container className="">
        <Row className="d-flex justify-content-between align-items-center">
          <Col sm="6" className="d-flex align-items-center ">
            <div className="footer-shroot ">الشروط والاحكام</div>
            <div className="footer-shroot mx-2">سيايه الخصوصيه</div>
            <div className="footer-shroot mx-2">اتصل بنا</div>
          </Col>
          <Col
            sm="6"
            className="d-flex justify-content-end align-items-center "
          >
            <a
              className="d-flex pt-3 mx-2"
              href="https://www.instagram.com/ahmed_dev13"
              target="_blank"
            >
              <p className="footer-phone">+212 6 6666666</p>
              <FaPhone width="20px" height="20px" />
            </a>
            <a
              style={{ cursor: "pointer" }}
              href="https://www.instagram.com/ahmed_dev13"
              target="_blank"
            >
              <FaFacebook width="20px" height="20px" />
            </a>
            <a
              style={{ cursor: "pointer" }}
              href="https://www.instagram.com/ahmed_dev13"
              target="_blank"
            >
              <FaInstagram width="20px" height="20px" />
            </a>
            <a
              style={{ cursor: "pointer" }}
              href="https://github.com/zeintsuTheProgrammer"
              target="_blank"
            >
              <FaGithub width="20px" height="20px" />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
