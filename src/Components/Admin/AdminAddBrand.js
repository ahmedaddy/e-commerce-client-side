import React from "react";
import { Row, Col } from "react-bootstrap";
import avatar from "../../images/avatar.png";
import AddBrandHook from "../../hook/brand/add-brand-hook";
import { ToastContainer } from "react-toastify";
import AdminBrandCard from "./AdminBrandCard";

const AdminAddBrand = () => {
  const [img, name, onChangeImage, onChangeName, handleSubmit, brands] =
    AddBrandHook();

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Add a new brand</div>
        <Col sm="8">
          <div className="text-form pb-2">Brand image</div>
          <div>
            <label for="upload-photo">
              <img
                src={img}
                alt="fzx"
                height="100px"
                width="120px"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              name="photo"
              onChange={onChangeImage}
              id="upload-photo"
              style={{ width: "10px" }}
            />
          </div>
          <input
            value={name}
            onChange={onChangeName}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Brand Name"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">
            Save
          </button>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="">
          {brands ? (
            brands.map((item, index) => {
              return <AdminBrandCard key={index} brand={item} />;
            })
          ) : (
            <h6>No brands yet</h6>
          )}
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminAddBrand;
