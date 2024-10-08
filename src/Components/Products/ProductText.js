import React from "react";
import { Row, Col } from "react-bootstrap";
import ViewProductDetailsHook from "../../hook/product/view-products-detalis-hook";
import { useParams } from "react-router-dom";
import AddCartHook from "../../hook/cart/add-cart-hook";

import { ToastContainer } from "react-toastify";
import notify from "../../hook/useNotifaction";

const ProductText = ({ product, category, brand }) => {
  const { id } = useParams();

  const [indexColor, choseColor, addToCart] = AddCartHook(id, product);
  // const colors = product.colors || [];

  // console.log(product);

  return (
    <div>
      {category && (
        <Row className="mt-2">
          <div className="cat-text">{category.name}</div>
        </Row>
      )}

      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
            {product.title}
            <div className="cat-rate d-inline mx-3">4.5</div>
          </div>
        </Col>
      </Row>
      {brand && (
        <Row>
          <Col md="8" className="mt-4">
            <div className="cat-text d-inline">Brand :</div>
            <div className="barnd-text d-inline mx-1">{brand.name}</div>
          </Col>
        </Row>
      )}
      <Row>
        <Col md="8" className="mt-1 d-flex">
          {product.colors
            ? product.colors.map((color, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      choseColor(color, index);
                    }}
                    className="color ms-2"
                    style={{
                      backgroundColor: color,
                      border: indexColor === index ? "1px solid white" : "none",
                      outline:
                        indexColor === index ? "3px solid black" : "none",
                    }}
                  ></div>
                );
              })
            : null}

          {/* <div
            className="color ms-2 border "
            style={{ backgroundColor: "white" }}
          ></div>
          <div
            className="color ms-2 border"
            style={{ backgroundColor: "black" }}
          ></div> */}
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">Specifications :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
            {product.description}
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">
            {product.price} درهم
          </div>
          <div
            onClick={
              product.quantity === 0
                ? () => {
                    notify("Product is not available", "warn");
                  }
                : addToCart
            }
            className="product-cart-add px-3 py-3 d-inline mx-3"
          >
            {product.quantity === 0
              ? "Product is not available"
              : "Add to cart"}
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default ProductText;
