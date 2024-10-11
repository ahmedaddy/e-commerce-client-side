import React from "react";
import { Row, Col, Modal, Button, Spinner } from "react-bootstrap";
import deleteicon from "../../images/delete.png";
import ProfileHook from "../../hook/user/profile-hook";

import { ToastContainer } from "react-toastify";
import ChangeUserPasswordHook from "../../hook/auth/change-user-password-hook";

const UserProfile = () => {
  const [
    name,
    email,
    phone,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    show,
    handleClose,
    handleShow,
    handelSubmit,
  ] = ProfileHook() || [];

  const [
    password,
    confirmPassword,
    onChangePassword,
    onChangeConfirmPassword,
    changePassword,
    loading,
  ] = ChangeUserPasswordHook();

  return (
    <div>
      <div className="admin-content-text">Profile Page</div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div className="font">Edit Personal Information</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            value={name}
            onChange={onChangeName}
            type="text"
            className="input-form font d-block mt-3 px-3"
            placeholder="Username"
          />
          <input
            value={email}
            onChange={onChangeEmail}
            type="email"
            className="input-form font d-block mt-3 px-3"
            placeholder="Email"
          />
          <input
            value={phone}
            onChange={onChangePhone}
            type="phone"
            className="input-form font d-block mt-3 px-3"
            placeholder="Phone"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="font bg-success"
            variant="success"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            className="font bg-dark"
            variant="dark"
            onClick={handelSubmit}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="user-address-card my-3 px-2">
        <Row className="d-flex justify-content-between pt-2">
          <Col xs="6" className="d-flex">
            <div className="p-2">Name:</div>
            <div className="p-1 item-delete-edit">{name}</div>
          </Col>
          <Col xs="6" className="d-flex justify-content-end">
            <div onClick={handleShow} className="d-flex mx-2">
              <img
                alt=""
                className="ms-1 mt-2"
                src={deleteicon}
                height="17px"
                width="15px"
              />
              <p className="item-delete-edit"> Edit</p>
            </div>
          </Col>
        </Row>

        <Row className="">
          <Col xs="12" className="d-flex">
            <div className="p-2">Phone Number:</div>
            <div className="p-1 item-delete-edit">{phone}</div>
          </Col>
        </Row>
        <Row className="">
          <Col xs="12" className="d-flex">
            <div className="p-2">Email:</div>
            <div className="p-1 item-delete-edit">{email}</div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col xs="10" sm="8" md="6">
            <div className="admin-content-text">Change Password</div>
            {/* <input
              value={currentPassword}
              onChange={onChangeِCurrentPassword}
              type="password"
              className="input-form d-block mt-1 px-3"
              placeholder="Enter current password"
            /> */}
            <input
              value={password}
              onChange={onChangePassword}
              type="password"
              className="input-form d-block mt-3 px-3"
              placeholder="Enter new password"
            />
            <input
              value={confirmPassword}
              onChange={onChangeConfirmPassword}
              type="password"
              className="input-form d-block mt-3 px-3"
              placeholder="Re-enter new password"
            />
          </Col>
        </Row>
        {loading ? "" : <Spinner animation="border" variant="primary" />}

        <Row>
          <Col xs="10" sm="8" md="6" className="d-flex justify-content-end">
            <button onClick={changePassword} className="btn-save d-inline mt-2">
              Change Password
            </button>
          </Col>
        </Row>

        <ToastContainer />
      </div>
    </div>
  );
};

export default UserProfile;
