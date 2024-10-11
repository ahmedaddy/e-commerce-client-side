import React from "react";
import { Row, Col } from "react-bootstrap";
import AddSubCategoryHook from "../../hook/subCategory/add-subCategory-hook";
import { ToastContainer } from "react-toastify";

const AdminAddSubCategory = () => {
  const [
    id,
    name,
    loading,
    category,
    handleIdChange,
    handleNameChange,
    handleSubmit,
  ] = AddSubCategoryHook();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Add a new subcategory</div>
        <Col sm="8">
          <input
            value={name}
            onChange={handleNameChange}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Subcategory Name"
          />
          <select
            name="languages"
            id="lang"
            className="select mt-3 px-2 "
            onChange={handleIdChange}
          >
            <option value="0">Select a main category</option>
            {category.data &&
              category.data.map((item) => {
                return (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                );
              })}
          </select>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 " onClick={handleSubmit}>
            Save
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminAddSubCategory;
