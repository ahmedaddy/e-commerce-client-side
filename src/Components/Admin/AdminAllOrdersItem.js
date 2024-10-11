import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import mobile from "../../images/mobile.png";
const AdminAllOrdersItem = ({ orderItem }) => {
  // console.log(orderItem);
  return (
    <Col
      sm="12"
      className="my-2"
      style={{
        padding: "10px",
        borderEadius: "7px",
        boxShadow: "1px 2px 2px 1px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Link
        to={`/admin/orders/${orderItem._id}`}
        className="cart-item-body-admin my-2 px-1 d-flex px-2"
        style={{ textDecoration: "none" }}
      >
        <div className="w-100">
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 cat-text">
                order number #{orderItem.id}
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2">
            <Col sm="12" className=" d-flex flex-row justify-content-start">
              <div className="d-inline pt-2 cat-title">
                order from.. {orderItem.user.name || ""}
              </div>
              <div
                style={{ color: "black" }}
                className="d-inline pt-2 cat-rate me-2"
              >
                {orderItem.user.email || ""}
              </div>
            </Col>
          </Row>

          <Row className="d-flex justify-content-between">
            <Col xs="6" className="d-flex">
              <div>
                <div style={{ color: "black" }} className="d-inline">
                  {" "}
                  Delivery :
                </div>
                <div className="d-inline mx-2 stat">
                  {orderItem.isDelivered === true ? "Done" : "Not done "}
                </div>
              </div>
              <div>
                <div style={{ color: "black" }} className="d-inline">
                  {" "}
                  Payment :
                </div>
                <div className="d-inline mx-2 stat">
                  {orderItem.isPaid === true ? "Done" : "Not done "}
                </div>
              </div>

              <div>
                <div style={{ color: "black" }} className="d-inline">
                  payment method :
                </div>
                <div className="d-inline mx-2 stat">
                  {orderItem.paymentMethodType === "cash"
                    ? "cash"
                    : "Credit card"}
                </div>
              </div>
            </Col>
            <Col xs="6" className="d-flex justify-content-end">
              <div>
                <div className="barnd-text">
                  {orderItem.totalOrderPrice || 0} Dirham
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Link>
    </Col>
  );
};

export default AdminAllOrdersItem;
