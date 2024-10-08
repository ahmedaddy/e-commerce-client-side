import React from "react";
import { Card, Col } from "react-bootstrap";
import rate from "../../images/rate.png";
import { Link } from "react-router-dom";
import ProdcutCardHook from "../../hook/product/prodcut-card-hook";
import { ToastContainer } from "react-toastify";
import { productURL } from "../../Api/baseURL";

// on ??off
import { FaHeart, FaRegHeart } from "react-icons/fa";
const ProductCard = ({ item, favProd }) => {
  // const handleProductClick = () => {
  //   window.location.reload();
  // };
  // console.log(item.quantity);

  const [deleteFromWishList, addToWishList, handleFav, isFav, favImg] =
    ProdcutCardHook(item, favProd);
  // console.log(item);

  return (
    <Col xs="12" sm="6" md="4" lg="3" className="d-flex ">
      <Card
        className="my-2 p-lg-4 p-2"
        style={{
          width: "100%",
          // height: "412px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
        }}
        // onClick={handleProductClick}
      >
        <div
          className={
            item.quantity === 0
              ? "not-available-product bg-danger text-light"
              : ""
          }
        >
          {item.quantity === 0 ? "Unavailable" : ""}
        </div>
        <a
          href={`/products/${item._id}`}
          style={{ textDecoration: "none", margin: "auto" }}
        >
          <div style={{ margin: "auto", height: "228px" }}>
            <Card.Img
              style={{ maxHeight: "100%", maxWidth: "100%" }}
              alt="img"
              src={productURL + item.imageCover}
              loading="lazy"
            />
          </div>
        </a>
        <div className="d-flex justify-content-end mx-2">
          {isFav ? (
            <FaHeart
              onClick={handleFav}
              className="text-center cursor-pointer"
              style={{
                height: "24px",
                width: "26px",
              }}
            />
          ) : (
            <FaRegHeart
              onClick={handleFav}
              className="text-center cursor-pointer"
              style={{
                height: "24px",
                width: "26px",
              }}
            />
          )}
        </div>
        <Card.Body className="d-flex align-items-cente flex-column justify-content-between h-100 p-1">
          <Card.Title>
            {item.title.length > 30
              ? `${item.title.slice(0, 100)}...`
              : item.title}
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between ">
              <div className="d-flex">
                <img
                  className=""
                  src={rate}
                  alt=""
                  height="16px"
                  width="16px"
                />
                <div className="card-rate mx-2">{item.ratingsQuantity}</div>
              </div>
              <div className="d-flex">
                <div className="card-old-price">{item.priceAfterDescount}</div>
                <div className="card-price">{item.price}</div>
                <div className="card-currency mx-1">درهم</div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <ToastContainer />
    </Col>
  );
};

export default ProductCard;
