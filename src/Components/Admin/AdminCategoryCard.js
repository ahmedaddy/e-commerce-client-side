import React, { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import deleteicon from "../../images/delete.png";
import CategoryCardHook from "../../hook/category/brand-category-hook";
const AdminCategoryCard = ({ category }) => {
  const [show, handleClose, handleOpen, handelDelete] =
    CategoryCardHook(category);
  // console.log(category);

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
          <div className="font">هل انتا متاكد من عملية الحذف للتصنيف</div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="font bg-success btn btn-success"
            variant="success"
            onClick={handleClose}
          >
            تراجع
          </Button>
          <Button
            className="font bg-danger btn btn-danger"
            variant="dark"
            onClick={handelDelete}
          >
            حذف
          </Button>
        </Modal.Footer>
      </Modal>
      <Row className="d-flex justify-content-between  ">
        <Col xs="6">
          <div style={{ width: "fit-content", textAlign: "center" }}>
            <img style={{ height: "100px" }} src={category.image} alt="" />
            <div className="p-2">{category.name}</div>
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

export default AdminCategoryCard;
