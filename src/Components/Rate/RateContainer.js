import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import rate from "../../images/rate.png";
import Pagination from "../Uitily/Pagination";
import RateItem from "./RateItem";
import RatePost from "./RatePost";
import ViewAllReviewHook from "../../hook/review/View-all-review-hook";
import { useParams } from "react-router-dom";

const RateContainer = ({ rateAvg, rateQty }) => {
  const { id } = useParams();

  const [allReviews, onPress] = ViewAllReviewHook(id);
  // console.log(allReviews);
  return (
    <Container className="rate-container">
      <Row>
        <Col className="d-flex">
          <div className="sub-tile d-inline p-1 ">التقيمات</div>
          <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
          <div className="cat-rate  d-inline  p-1 pt-2">{rateAvg}</div>
          <div className="rate-count d-inline p-1 pt-2">({rateQty} تقييم)</div>
        </Col>
      </Row>

      <RatePost />
      {allReviews &&
        allReviews.data &&
        allReviews.data.map((item, index) => (
          <RateItem key={index} item={item} />
        ))}

      {/* <RateItem />
      <RateItem />
      <RateItem />
      <RateItem /> */}
      <Pagination onPress={onPress} />
    </Container>
  );
};

export default RateContainer;
