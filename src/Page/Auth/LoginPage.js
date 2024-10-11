import React, { useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginHook from "../../hook/auth/login-hook";

import { ToastContainer } from "react-toastify";

const LoginPage = () => {
  const [
    onChangeEmail,
    onChangePassword,
    email,
    password,
    loading,
    onSubmit,
    isPress,
  ] = LoginHook();

  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center">
        <Col sm="12" className="d-flex flex-column">
          <label className="mx-auto title-login">Login</label>
          <input
            value={email}
            onChange={onChangeEmail}
            placeholder="Email..."
            type="email"
            className="user-input my-3 text-center mx-auto"
          />
          <input
            value={password}
            onChange={onChangePassword}
            placeholder="Password..."
            type="password"
            className="user-input text-center mx-auto"
          />
          <button onClick={onSubmit} className="btn-login mx-auto mt-4">
            Log In
          </button>

          <label className="mx-auto my-4">
            Don't have an account?{" "}
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                Click here
              </span>
            </Link>
          </label>

          <label className="mx-auto my-4">
            <Link
              to="/user/forget-password"
              style={{ textDecoration: "none", color: "red" }}
            >
              Forgot your password?
            </Link>
          </label>

          {isPress === true ? (
            loading === true ? (
              <Spinner animation="border" role="status"></Spinner>
            ) : null
          ) : null}
        </Col>

        {/* <label className="mx-auto my-4">
          <Link to="/admin/allproducts" style={{ textDecoration: "none" }}>
            <span style={{ cursor: "pointer" }} className="text-danger">
              Admin Login
            </span>
          </Link>

          <Link to="/user/allorders" style={{ textDecoration: "none" }}>
            <span style={{ cursor: "pointer" }} className="text-danger mx-3">
              User Login
            </span>
          </Link>
        </label> */}
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default LoginPage;
