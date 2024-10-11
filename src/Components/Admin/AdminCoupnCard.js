import React, { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import CouponCardHook from "../../hook/coupon/coupon-card-hook";
import deleteicon from "../../images/delete.png";
import { RiEdit2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const AdminCoupnCard = ({ coupon }) => {
  const [dateString, formatDate, show, handleClose, handleOpen, handelDelete] =
    CouponCardHook(coupon);

  return (
    <div className="user-address-card my-3 px-2">
      {/* Modal for delete confirmation */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div className="font">Confirm Deletion</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">
            Are you sure you want to delete this coupon?
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="text-light bg-success"
            variant="success"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            className="text-light bg-dark"
            variant="dark"
            onClick={handelDelete}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Coupon details */}
      <Row className="d-flex justify-content-between">
        <Col xs="6">
          <div className="p-2">Coupon Name: {coupon.name}</div>
        </Col>
        <Col xs="6" className="d-flex justify-content-end">
          <div className="d-flex p-2">
            <Link
              to={`/admin/editcoupon/${coupon._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="d-flex mx-2">
                <RiEdit2Fill
                  alt=""
                  className="ms-1 mt-2"
                  height="17px"
                  width="15px"
                />
                <p className="item-delete-edit">Edit</p>
              </div>
            </Link>
            <div onClick={handleOpen} className="d-flex">
              <img
                alt=""
                className="ms-1 mt-2"
                src={deleteicon}
                height="17px"
                width="15px"
              />
              <p className="item-delete-edit">Remove</p>
            </div>
          </div>
        </Col>
      </Row>

      {/* Coupon expiration date */}
      <Row>
        <Col xs="12">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            Expiration Date: {formatDate(dateString)}
          </div>
        </Col>
      </Row>

      {/* Coupon discount percentage */}
      <Row className="mt-3">
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            Discount Percentage:
          </div>
          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {coupon.discount} %
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AdminCoupnCard;
