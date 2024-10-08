import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import AddReviewHook from "../../hook/review/add-review-hook";
import { useParams } from "react-router-dom";

const RatePost = () => {
  const { id } = useParams();
  const [onChangeTitle, onChangeRateValue, title, rateValue, user, onSubmit] =
    AddReviewHook(id);

  const setting = {
    size: 20,
    count: 5,
    value: rateValue,
    onChange: (newValue) => {
      console.log("New Value:", newValue);
      onChangeRateValue(newValue);
    },
  };
  const [username, setUser] = useState("");
  useEffect(() => {
    if (localStorage.getItem("user") != null)
      setUser(JSON.parse(localStorage.getItem("user")).username);
  }, []);
  return (
    <div>
      <Row className="mt-3 ">
        <Col sm="12" className=" me-md-5  d-flex">
          <div className="rate-name  d-inline ms-3 mt-1 ">{username}</div>
          <ReactStars {...setting} />
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-felx me-4 pb-2">
          <textarea
            value={title}
            onChange={onChangeTitle}
            className="input-form-area p-2 mt-3"
            rows="2"
            cols="20"
            placeholder="اكتب تعليقك...."
          />
          <div className=" d-flex justify-content-end al">
            <div
              onClick={onSubmit}
              className="product-cart-add px-3  py-2 text-center d-inline"
            >
              اضف تعليق
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RatePost;
