import React, { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import CouponCardHook from "../../hook/coupon/coupon-card-hook";
import deleteicon from "../../images/delete.png";
// import editicon from "../../images/edit.png";
import { RiEdit2Fill } from "react-icons/ri";

import { deleteCoupon } from "../../redux/actions/couponAction";
import { Link } from "react-router-dom";
import BrandCardHook from "../../hook/brand/brand-card-hook";
const AdminBrandCard = ({ brand }) => {
  const [show, handleClose, handleOpen, handelDelete] = BrandCardHook(brand);
  // console.log(brand);

  return (
    <div className="user-address-card my-3 px-2">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            <div className="font">تاكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">هل انتا متاكد من عملية الحذف للماركة</div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="font bg-success btn btn-success"
            variant="font "
            onClick={handleClose}
          >
            تراجع
          </Button>
          <Button
            className="font bg-danger btn btn-danger"
            variant="font "
            onClick={handelDelete}
          >
            حذف
          </Button>
        </Modal.Footer>
      </Modal>
      <Row className="d-flex justify-content-between  ">
        <Col xs="6">
          <div style={{ width: "fit-content", textAlign: "center" }}>
            <img style={{ height: "100px" }} src={brand.image} alt="" />
            <div className="p-2">{brand.name}</div>
          </div>
        </Col>
        <Col xs="6" className="d-flex d-flex justify-content-end">
          <div className="d-flex p-2">
            {/* <Link
              to={`/admin/editcoupon/${brand._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="d-flex mx-2 ">
                <RiEdit2Fill
                  alt=""
                  className="ms-1 mt-2"
                  height="17px"
                  width="15px"
                />
                <p className="item-delete-edit"> تعديل</p>
              </div>
            </Link> */}
            <div onClick={handleOpen} className="d-flex ">
              <img
                alt=""
                className="ms-1 mt-2"
                src={deleteicon}
                height="17px"
                width="15px"
              />
              <p className="item-delete-edit"> ازاله</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AdminBrandCard;
