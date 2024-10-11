import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import CreateOrderCashHook from "../../hook/checkout/create-order-cash-hook";
import CreateOrderCartHook from "../../hook/checkout/create-order-cart-hook";

import { ToastContainer } from "react-toastify";
import notify from "../../hook/useNotifaction";
import AllCartHook from "../../hook/cart/all-cart-page-hook";

const ChoosePayMethoud = () => {
  const [addressDetail, setAddressDetail] = useState("");
  const [phone, setPhone] = useState("");

  const [handleCreateOrderCash] = CreateOrderCashHook(addressDetail, phone);
  const [handleCreateOrderCard] = CreateOrderCartHook(addressDetail, phone);
  const [type, setType] = useState("");
  const onChangePaymentType = (e) => {
    setType(e.target.value);
  };
  // console.log(type);

  const onChangeDetail = (e) => {
    setAddressDetail(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handlePay = () => {
    // if (addressDetail === "") {
    //   notify("أكتب عنوان ...", "warn");
    //   return;
    // }
    // if (phone === "") {
    //   notify("أكتب رقم هاتف ...", "warn");
    //   return;
    // }
    if (type === "CASH") {
      if (addressDetail === "") {
        notify("Please write the address", "warn");
        return;
      } else if (phone === "") {
        notify("Please enter your phone number", "warn");
        return;
      } else {
        handleCreateOrderCash();
      }
    } else if (type === "CARD") {
      if (addressDetail === "") {
        notify("Please write the address", "warn");
        return;
      } else if (phone === "") {
        notify("Please enter your phone number", "warn");
        return;
      } else {
        handleCreateOrderCard();
      }
    } else {
      notify("Please choose a payment method first.", "warn");
      return;
    }
  };

  const [
    loading,
    numberOfCartItems,
    couponName,
    cartItems,
    totalCartPrice,
    totalCartPriceAfterDiscount,
  ] = AllCartHook();

  return (
    <div>
      <div className="admin-content-text pt-5">Choose payment method</div>
      <div className="user-address-card my-3 px-3">
        <Row className="d-flex justify-content-between ">
          <Col xs="12" className="my-4">
            <input
              onChange={onChangePaymentType}
              name="group"
              id="group1"
              type="radio"
              value="CARD"
              className="mt-2"
            />
            <label className="mx-2" for="group1">
              Payment by credit card
            </label>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col xs="12" className="d-flex">
            <input
              onChange={onChangePaymentType}
              name="group"
              id="group1"
              type="radio"
              value="CASH"
              className="mt-2"
            />
            <label className="mx-2" for="group1">
              Cash on delivery
            </label>
          </Col>
        </Row>
      </div>

      <Row>
        <Col
          xs="12"
          className="d-flex justify-content-end flex-column"
          style={{ width: "fit-content" }}
        >
          <input
            className="user-input my-3 pe-3"
            type="text"
            placeholder="Enter your address"
            minLength={10}
            value={addressDetail}
            onChange={onChangeDetail}
            required
          />
          <input
            className="user-input my-3 pe-3"
            type="number"
            placeholder="Enter your phone number"
            minLength={10}
            value={phone}
            onChange={onChangePhone}
            required
          />
        </Col>
        <Col xs="12" className="d-flex justify-content-end">
          <div className="product-price d-inline   border">
            Dirham :{" "}
            {totalCartPriceAfterDiscount
              ? totalCartPriceAfterDiscount
              : totalCartPrice}
          </div>
          <div
            onClick={handlePay}
            className="product-cart-add px-3 pt-2 d-inline me-2"
          >
            Complete the purchase
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default ChoosePayMethoud;
