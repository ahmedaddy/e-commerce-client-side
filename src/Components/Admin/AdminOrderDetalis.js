import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";

import { useParams } from "react-router-dom";
import CartItem from "../Cart/CartItem";
import GetOneOrderHook from "../../hook/orders/get-one-order-hook";
import ChangeOrderStatusHook from "../../hook/orders/change-order-status-hook";
import { ToastContainer } from "react-toastify";

const AdminOrderDetalis = () => {
  const { id } = useParams();
  const [orderData, cartItems, loading] = GetOneOrderHook(id);

  // console.log(orderData);

  const [delivery, pay, handleDelevery, handlePay, changeDelivery, changePay] =
    ChangeOrderStatusHook(id);

  return (
    <div>
      <div className="admin-content-text">
        {cartItems && cartItems.length > 0
          ? `Order details No ${cartItems[0]._id}`
          : "No order details available"}
      </div>
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        cartItems &&
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      )}
      {/* <CartItem />
            <CartItem />
            <CartItem /> */}

      <Row className="justify-content-center mt-4 user-data">
        <Col xs="12" className=" d-flex">
          <div className="admin-content-text py-2">Customer Details</div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            Name :
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {orderData ? (orderData.user ? orderData.user.name : "") : ""}
          </div>
        </Col>

        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            Phone number :
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {orderData ? orderData.user?.phone : ""}
          </div>
        </Col>

        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            Email :
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {orderData ? (orderData.user ? orderData.user.email : "") : ""}
          </div>
        </Col>
        {/*  */}
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            Payment status :
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {orderData ? (orderData.isPaid ? "Done" : "Not done") : ""}
          </div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            Delivery status :
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {orderData ? (orderData.isDeliverd ? "Done" : "Not done") : ""}
          </div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            Address :{" "}
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {orderData && orderData.shippingAddress
              ? orderData.shippingAddress.details
              : "There is no address"}
          </div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            shipping address phone :
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {orderData && orderData.shippingAddress
              ? orderData.shippingAddress.phone
              : "There is no phone"}
          </div>
        </Col>
        {/* <div className=" d-inline px-4 border text-center pt-2">
          المجموع ٤٠٠٠ جنيه
        </div> */}
        <div className="d-flex mt-2 justify-content-center">
          <div>
            <select
              name="pay"
              id="paid"
              onChange={handlePay}
              className="select input-form-area mt-1  text-center w-50"
            >
              <option value="0">Payment</option>
              <option value="true">Done</option>
              <option value="false">Not done</option>
            </select>
            <button onClick={changePay} className="btn-a px-2 d-inline mx-1 ">
              Save
            </button>
          </div>
          <div>
            <select
              onChange={handleDelevery}
              name="deliver"
              id="deliver"
              className="select input-form-area mt-1  text-center  w-50"
            >
              <option value="0">Delivery</option>
              <option value="true">Done</option>
              <option value="false">Not done</option>
            </select>
            <button
              onClick={changeDelivery}
              className="btn-a px-2 d-inline mx-1 "
            >
              Save
            </button>
          </div>
        </div>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminOrderDetalis;
