import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import mobile from "../../images/mobile.png";
import deleteicon from "../../images/delete.png";
import DeleteUserCartItem from "../../hook/cart/delete-user-cart-item-hook";
import { productURL } from "../../Api/baseURL";
const CartItem = ({ item }) => {
  // console.log(item);
  const [
    loading,
    deleteCartItem,
    clearCart,
    quantity,
    onChangeQuantity,
    handleUpdateQuantity,
  ] = DeleteUserCartItem(item);
  if (item.product === null) {
    return <div></div>;
  }
  console.log(item);

  return (
    <div className="cart-item-body my-2 d-flex px-2">
      <Row
        className="w-100 m-auto"
        style={{
          padding: "10px",
          borderEadius: "7px",
          boxShadow: "1px 2px 2px 1px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Col xs="12" md={4} sm={5} className="m-auto ">
          <img
            width="auto"
            height="197px"
            src={productURL + item.product.imageCover}
            // src={item.product ? item.product.imageCover : mobile}
            alt=""
          />
        </Col>
        <Col xs="12" md={8} sm={7} className=" d-sm-block">
          <div className="w-100 ">
            <Row className="justify-content-between">
              <Col sm="12" className=" d-flex flex-row justify-content-between">
                <div className="d-inline pt-2 cat-text">
                  {item.product?.category?.name}
                </div>
                <div
                  onClick={deleteCartItem}
                  className="d-flex pt-2 "
                  style={{ cursor: "pointer" }}
                >
                  <img src={deleteicon} alt="" width="20px" height="24px" />
                  <div className="cat-text d-inline me-2">Delete</div>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center mt-2">
              <Col sm="12" className=" d-flex flex-row justify-content-start">
                <div className="d-inline pt-2 cat-title">
                  {item.product.title}
                </div>
                <div className="d-inline pt-2 cat-rate me-2">
                  {item.product.ratingsAverage || 0}
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm="12" className="mt-1">
                <div className="cat-text d-inline">Brand :</div>
                <div className="barnd-text d-inline mx-1">
                  {item.product.brand ? item.product.brand.name : ""}{" "}
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm="12" className="mt-1 d-flex">
                <div
                  className="color ms-2 border"
                  style={{ backgroundColor: item.color }}
                ></div>
              </Col>
            </Row>

            <Row className="justify-content-between">
              <Col
                sm="12"
                md="6"
                className=" d-flex flex-row justify-content-between align-items-center"
              >
                <div className="d-inline pt-2 d-flex">
                  <div className="cat-text  d-inline">Quantity</div>
                  <input
                    value={quantity}
                    onChange={onChangeQuantity}
                    className="mx-2 py-4 px-2"
                    type="number"
                    maxLength={2}
                    style={{ width: "40px", height: "25px" }}
                  />
                  <Button
                    onClick={handleUpdateQuantity}
                    className="btn btn-dark"
                  >
                    Apply
                  </Button>
                </div>
              </Col>
              <Col
                sm="12"
                md="6"
                className=" d-flex flex-row justify-content-between align-items-center"
              >
                <span className="pt-2">Quantity : {item.quantity}</span>
                <div className="d-inline barnd-text">{item.price}Dirham</div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CartItem;
