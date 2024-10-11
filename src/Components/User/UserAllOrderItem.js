import React from "react";
import { Row, Col } from "react-bootstrap";
import mobile from "../../images/mobile.png";
import UserAllOrderCard from "./UserAllOrderCard";

const UserAllOrderItem = ({ order }) => {
  // console.log(order);

  // Format the date to a more readable format
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="user-order mt-2">
      {/* If there are no orders, display a message */}
      {order.length <= 0 ? <h2>No orders have been placed yet</h2> : null}

      <Row>
        <div className="py-2 order-title">
          Order Number #{order._id || 0} -- Placed on:
          {formatDate(order.createdAt)}
        </div>
      </Row>

      {/* Render all items in the order */}
      {order &&
        order.cartItems &&
        order.cartItems.map((item, index) => {
          return <UserAllOrderCard key={index} item={item} />;
        })}

      {/* Additional order details like delivery and payment status */}
      <Row className="d-flex justify-content-between">
        <Col xs="9" className="d-flex">
          <div>
            <div className="d-inline">Delivery:</div>
            <div className="d-inline mx-2 stat">
              {order.isDelivered === true ? "Delivered" : "Not delivered"}
            </div>
          </div>

          <div>
            <div className="d-inline">Payment:</div>
            <div className="d-inline mx-2 stat">
              {order.isPaid === true ? "Paid" : "Not paid"}
            </div>
          </div>

          <div>
            <div className="d-inline">Payment Method:</div>
            <div className="d-inline mx-2 stat">
              {order.paymentMethodType === "cash" ? "Cash" : "Credit Card"}
            </div>
          </div>
        </Col>

        {/* Display total order price */}
        <Col xs="3" className="d-flex justify-content-end">
          <div>
            <div className="barnd-text">{order.totalOrderPrice} MAD</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllOrderItem;
