import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import RegisterHook from "../../hook/auth/register-hook";

import { ToastContainer } from "react-toastify";

const RegisterPage = () => {
  const [
    onChangeName,
    onChangePhone,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPassword,
    name,
    phone,
    email,
    password,
    confirmPassword,
    onSubmit,
  ] = RegisterHook();
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center hieght-search">
        <Col sm="12" className="d-flex flex-column">
          <label className="mx-auto title-login">Create a New Account</label>
          <input
            value={name}
            onChange={onChangeName}
            placeholder="Username..."
            type="text"
            className="user-input mt-3 text-center mx-auto"
          />
          <input
            value={phone}
            onChange={onChangePhone}
            maxLength={10}
            placeholder="Phone number..."
            type="text"
            className="user-input mt-3 text-center mx-auto"
          />
          <input
            value={email}
            onChange={onChangeEmail}
            placeholder="Email..."
            type="text"
            className="user-input my-3 text-center mx-auto"
          />
          <input
            value={password}
            onChange={onChangePassword}
            placeholder="Password..."
            type="password"
            className="user-input my-3 text-center mx-auto"
          />
          <input
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            placeholder="Confirm Password..."
            type="password"
            className="user-input text-center mx-auto"
          />
          <button onClick={onSubmit} className="btn-login mx-auto mt-4">
            Register Account
          </button>
          <label className="mx-auto my-4">
            Already have an account?{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                Click here
              </span>
            </Link>
          </label>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default RegisterPage;
