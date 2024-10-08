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
  // console.log(cartItems);
  //   console.log(cartItems);

  const [delivery, pay, handleDelevery, handlePay, changeDelivery, changePay] =
    ChangeOrderStatusHook(id);

  return (
    <div>
      <div className="admin-content-text">تفاصيل الطلب رقم#55</div>
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
          <div className="admin-content-text py-2">تفاصيل العميل</div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            الاسم:
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
            رقم الهاتف:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {orderData ? (orderData.user ? orderData.user.phone : "") : ""}
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
            الايميل:
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
            حالة الدفع:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {orderData ? (orderData.isPaid ? "تم الدفع" : "لم يتم الدفع") : ""}
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
            حالة التوصيل:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {orderData
              ? orderData.isDeliverd
                ? "تم التوصيل"
                : "لم يتم التوصيل"
              : ""}
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
            العنوان :{" "}
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
              : "ليس هناك عنوان"}
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
            الهاتف :{" "}
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
              : "ليس هناك هاتف"}
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
              <option value="0">الدفع</option>
              <option value="true">تم</option>
              <option value="false">لم يتم</option>
            </select>
            <button onClick={changePay} className="btn-a px-2 d-inline mx-1 ">
              حفظ{" "}
            </button>
          </div>
          <div>
            <select
              onChange={handleDelevery}
              name="deliver"
              id="deliver"
              className="select input-form-area mt-1  text-center  w-50"
            >
              <option value="0">التوصيل</option>
              <option value="true">تم</option>
              <option value="false">لم يتم</option>
            </select>
            <button
              onClick={changeDelivery}
              className="btn-a px-2 d-inline mx-1 "
            >
              حفظ{" "}
            </button>
          </div>
        </div>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminOrderDetalis;
