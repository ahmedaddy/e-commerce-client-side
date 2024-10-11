import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import DeleteUserCartItem from "../../hook/cart/delete-user-cart-item-hook";
import ApplyCouponHook from "../../hook/cart/apply-coupon-hook";

const CartCheckout = ({
  cartItems,
  totalCartPrice,
  totalCartPriceAfterDiscount,
}) => {
  const [loading, deleteCartItem, clearCart] = DeleteUserCartItem();

  const [handleSubmitCoupon, handleCouponInput, couponName, handelCheckout] =
    ApplyCouponHook(cartItems);

  // console.log(cartItems);
  // console.log(totalCartPrice);
  // console.log(totalCartPriceAfterDiscount);

  // console.log(cartItems);

  return (
    <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
      <Col xs="12" className="d-flex  flex-column  ">
        <div className="d-flex  ">
          <input
            value={couponName}
            onChange={handleCouponInput}
            className="copon-input d-inline text-center "
            placeholder="Discount code"
          />
          <button onClick={handleSubmitCoupon} className="copon-btn d-inline ">
            Apply
          </button>
        </div>
        {/* <div className="product-price d-inline w-100 my-3  border">
          <span>التمن قبل الخصم : </span>
          {totalCartPriceAfterDiscount
            ? totalCartPriceAfterDiscount
            : totalCartPrice}
          درهم
        </div> */}
        <div className="product-price d-inline w-100 my-3  border">
          <span>Price before discount : </span>
          {totalCartPrice}
          Dirham
        </div>
        {totalCartPriceAfterDiscount === "" ? (
          " "
        ) : (
          <div className="product-price d-inline w-100 mb-3 border">
            <span>Price after discount : </span>
            {totalCartPriceAfterDiscount}
            Dirham
          </div>
        )}
        <Link
          // to="/order/paymethoud"
          style={{ textDecoration: "none" }}
          className="product-cart-add  d-inline "
        >
          <button
            className="product-cart-add w-100 px-2"
            onClick={handelCheckout}
          >
            Complete the purchase
          </button>
        </Link>

        <button
          onClick={clearCart}
          className="product-cart-add w-100 px-2 mt-3"
        >
          Clear the cart
        </button>
      </Col>
    </Row>
  );
};

export default CartCheckout;
