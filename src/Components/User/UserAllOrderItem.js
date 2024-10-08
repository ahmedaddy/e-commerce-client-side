import React from "react";
import { Row, Col } from "react-bootstrap";
import mobile from "../../images/mobile.png";
import UserAllOrderCard from "./UserAllOrderCard";
const UserAllOrderItem = ({ order }) => {
  // console.log(order);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <div className="user-order mt-2">
      {order.length <= 0 ? <h2>لايوجد أي طلب تم تنفيده من قبل</h2> : null}
      <Row>
        <div className="py-2 order-title">
          طلب رقم #{order._id || 0} -- تم بتاريخ : {formatDate(order.createdAt)}
        </div>
      </Row>
      {order &&
        order.cartItems &&
        order.cartItems.map((item, index) => {
          return <UserAllOrderCard key={index} item={item} />;
        })}
      {/* <UserAllOrderCard />
      <UserAllOrderCard /> */}
      <Row className="d-flex justify-content-between">
        <Col xs="9" className="d-flex">
          <div>
            <div className="d-inline">التوصيل :</div>
            <div className="d-inline mx-2 stat">
              {order.isDelivered === true ? "تم التوصيل" : "لم يتم "}
            </div>
          </div>
          <div>
            <div className="d-inline">الدفع :</div>
            <div className="d-inline mx-2 stat">
              {order.isPaid === true ? "تم الدفع" : "لم يتم "}
            </div>
          </div>

          <div>
            <div className="d-inline">طرقة الدفع :</div>
            <div className="d-inline mx-2 stat">
              {order.paymentMethodType === "cash" ? "كاش" : "بطاقة ائتمانية"}
            </div>
          </div>
        </Col>
        <Col xs="3" className="d-flex justify-content-end">
          <div>
            <div className="barnd-text">{order.totalOrderPrice} درهم</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllOrderItem;
