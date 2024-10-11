import React, { useRef } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import AddCouponHook from "../../hook/coupon/add-coupon-hook";
import AdminCoupnCard from "./AdminCoupnCard";

const AdminAddCoupon = () => {
  const dateRef = useRef();
  const [
    name,
    date,
    discount,
    handleName,
    handleDate,
    handleDiscount,
    onSubmit,
    coupons,
  ] = AddCouponHook();

  return (
    <div>
      <Row className="justify-content-start">
        <div className="admin-content-text pb-4">Add a New Coupon</div>
        <Col sm="8">
          <input
            value={name}
            onChange={handleName}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Coupon Name"
          />
          <input
            ref={dateRef}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Expiration Date"
            onChange={handleDate}
            value={date}
            onFocus={() => (dateRef.current.type = "date")}
            onBlur={() => (dateRef.current.type = "text")}
          />
          <input
            value={discount}
            onChange={handleDiscount}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="Coupon Discount Percentage"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end">
          <button onClick={onSubmit} className="btn-save d-inline mt-2">
            Save Coupon
          </button>
        </Col>
      </Row>

      <Row>
        <Col sm="8">
          {coupons ? (
            coupons.map((item, index) => {
              return <AdminCoupnCard key={index} coupon={item} />;
            })
          ) : (
            <h6>No Coupons Available</h6>
          )}
        </Col>
      </Row>

      <ToastContainer />
    </div>
  );
};

export default AdminAddCoupon;
