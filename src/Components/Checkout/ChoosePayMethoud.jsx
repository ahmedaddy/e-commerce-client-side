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
      handleCreateOrderCash();
    } else if (type === "CARD") {
      handleCreateOrderCard();
    } else {
      notify("من فضلك اختر طريقة للدفع أولا", "warn");
      return;
    }
    if (addressDetail === "") {
      notify("من فضلك أكتب عنوان", "warn");
      return;
    }
    if (phone === "") {
      notify("من فضلك أكتب رقم هاتفك", "warn");
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
      <div className="admin-content-text pt-5">اختر طريقة الدفع</div>
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
              الدفع عن طريق البطاقه الائتمانية
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
              الدفع عند الاستلام
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
            placeholder="أدخل عنوانك"
            minLength={10}
            value={addressDetail}
            onChange={onChangeDetail}
            required
          />
          <input
            className="user-input my-3 pe-3"
            type="number"
            placeholder="أدخل رقم هاتفك"
            minLength={10}
            value={phone}
            onChange={onChangePhone}
            required
          />
        </Col>
        <Col xs="12" className="d-flex justify-content-end">
          <div className="product-price d-inline   border">
            درهم
            {totalCartPriceAfterDiscount
              ? totalCartPriceAfterDiscount
              : totalCartPrice}
          </div>
          <div
            onClick={handlePay}
            className="product-cart-add px-3 pt-2 d-inline me-2"
          >
            اتمام الشراء
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default ChoosePayMethoud;
