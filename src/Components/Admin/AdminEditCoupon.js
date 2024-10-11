import React, { useRef } from "react";
import { Row, Col } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import EditCouponHook from "../../hook/coupon/edite-coupon-hook";
import { useParams } from "react-router-dom";

const AdminEditCoupon = () => {
  const dateRef = useRef();
  const { id } = useParams();
  const [
    name,
    date,
    discount,
    handleName,
    handleDate,
    handleDiscount,
    onSubmit,
    loading,
  ] = EditCouponHook(id);

  return (
    <div>
      <Row className="justify-content-start">
        <div className="admin-content-text pb-4">Edit Coupon Details</div>
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
            placeholder="Discount Percentage"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end">
          <button onClick={onSubmit} className="btn-save d-inline mt-2">
            Save Changes
          </button>
        </Col>
      </Row>

      <ToastContainer />
    </div>
  );
};

export default AdminEditCoupon;
