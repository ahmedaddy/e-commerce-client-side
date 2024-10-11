import React from "react";
import { Row, Col } from "react-bootstrap";
import mobile from "../../images/mobile.png";
import { productURL } from "../../Api/baseURL";
import { Link } from "react-router-dom";

const UserAllOrderCard = ({ item }) => {
  // console.log(item);
  return (
    <div>
      <Row className="mb-2">
        <Col xs="4" md="2" className="d-flex justify-content-start">
          <Link
            to={`/products/${item.product?._id}`}
            style={{ textDecoration: "none" }}
            className="m-auto"
          >
            <img
              width="fit-content"
              height="120px"
              src={productURL + item.product?.imageCover}
              alt=""
            />
          </Link>
        </Col>
        <Col xs="8" md="10">
          <div className="d-inline pt-2 cat-title">{item.product?.title}</div>
          {/* <div className="d-inline pt-2 cat-rate me-2">4.5</div>
          <div className="rate-count d-inline p-1 pt-2">(160 تقييم)</div> */}
          <div className="mt-3 d-flex align-items-center">
            {item.color ? (
              <>
                <div className="cat-text  d-inline">Color :</div>
                <div
                  className="cat-text me-2"
                  style={{
                    backgroundColor: item.color,
                    height: `30px`,
                    width: `30px`,
                  }}
                ></div>
              </>
            ) : (
              ""
            )}
            {/* <input
              className="mx-2 "
              type="number"
              style={{ width: "40px", height: "25px" }}
            /> */}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllOrderCard;
