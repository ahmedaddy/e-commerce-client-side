import React from "react";
import { Col, Row } from "react-bootstrap";
import avatar from "../../images/avatar.png";
import AddCategoryHook from "../../hook/category/add-category-hook";
import { ToastContainer } from "react-toastify";
import AdminCategoryCard from "./AdminCategoryCard";

const AdminAddCategory = () => {
  const [img, name, onChangeImage, onChangeName, handleSubmit, categories] =
    AddCategoryHook();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Add new category</div>
        <Col sm="8">
          <div className="text-form pb-2">Category Image</div>
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
            placeholder="Category name"
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
          {categories ? (
            categories.map((item, index) => {
              return <AdminCategoryCard key={index} category={item} />;
            })
          ) : (
            <h6>There are no categories yet.</h6>
          )}
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminAddCategory;
