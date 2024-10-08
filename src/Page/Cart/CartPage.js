import React from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import CartCheckout from "../../Components/Cart/CartCheckout";
import CartItem from "../../Components/Cart/CartItem";
import AllCartHook from "../../hook/cart/all-cart-page-hook";
import { ToastContainer } from "react-toastify";

const CartPage = () => {
  const [
    loading,
    numberOfCartItems,
    couponName,
    cartItems,
    totalCartPrice,
    totalCartPriceAfterDiscount,
  ] = AllCartHook();
  // console.log(totalCartPriceAfterDiscount);
  // console.log(cartItems);
  // console.log(totalCartPrice);
  return (
    <Container style={{ minHeight: "670px" }}>
      <Row>
        <div className="cart-title mt-4">عربة التسوق</div>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col xs="12" md="9">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => {
              return <CartItem key={index} item={item} />;
            })
          ) : (
            <h6 className="py-2">لا توجد منتجات فى العربة</h6>
          )}
        </Col>

        <Col xs="6" md="3">
          <CartCheckout
            cartItems={cartItems}
            couponName={couponName}
            totalCartPrice={totalCartPrice}
            totalCartPriceAfterDiscount={totalCartPriceAfterDiscount}
          />
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default CartPage;
