import React from "react";
import { Row, Col } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import avatar from "../../images/avatar.png";
import add from "../../images/add.png";
import AddProductHook from "../../hook/product/add-product-hook";

import { CompactPicker } from "react-color";
import { ToastContainer } from "react-toastify";

import MultiImageInput from "react-multiple-image-input";

import ImageUploading from "react-images-uploading";

const AdminAddProducts = () => {
  // const onSelect = () => {};
  // const onRemove = () => {};

  const [
    category,
    brand,
    images,
    setImages,
    onChangeImages,
    title,
    description,
    price,
    priceAfterDiscount,
    catId,
    qty,
    brandId,
    seletedSubId,
    loading,
    onChangeTitle,
    onChangeDescription,
    onChangePrice,
    onChangePriceAfterDiscount,
    onChangeQuantity,
    handelChangeComplete,
    onSelect,
    onRemove,
    onSeletCategory,
    subCatOptions,
    onSeletBrand,
    onChangeColor,
    showColor,
    colors,
    onSubmit,
  ] = AddProductHook();

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4"> اضافه منتج جديد</div>
        <Col sm="8">
          <div className="text-form pb-2"> صور للمنتج</div>
          <ImageUploading
            multiple
            value={images}
            onChange={onChangeImages}
            maxNumber={4}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                <button
                  className="btn btn-success"
                  // style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Click or Drop here
                </button>
                &nbsp;
                <button className="btn btn-danger" onClick={onImageRemoveAll}>
                  Remove all images
                </button>
                <Row>
                  {imageList.map((image, index) => (
                    <Col sm="3" key={index} className="image-item">
                      <img src={image["data_url"]} alt="" width="100" />
                      <div className="image-item__btn-wrapper ">
                        <button
                          className="btn btn-primary w-100 my-2"
                          onClick={() => onImageUpdate(index)}
                        >
                          Update
                        </button>
                        <button
                          className="btn btn-danger w-100"
                          onClick={() => onImageRemove(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            )}
          </ImageUploading>
          {/* <MultiImageInput
            images={images}
            setImages={setImages}
            theme={"light"}
            allowCrop={false}
            max={4}
          /> */}
          {/* <img src={avatar} alt="" height="100px" width="120px" /> */}
          <input
            value={title}
            onChange={onChangeTitle}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم المنتج"
          />
          <textarea
            value={description}
            onChange={onChangeDescription}
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="وصف المنتج"
          />
          <input
            value={price}
            onChange={onChangePrice}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر قبل الخصم"
          />
          <input
            value={priceAfterDiscount}
            onChange={onChangePriceAfterDiscount}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="سعر الحالي للمنتج"
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="الكمية المتاحة"
            value={qty}
            onChange={onChangeQuantity}
          />
          <select
            onChange={onSeletCategory}
            name="languages"
            id="lang"
            className="select input-form-area mt-3 px-2 "
          >
            <option value="val">التصنيف الرئيسي</option>
            {category.data &&
              category.data.map((item, index) => {
                return (
                  <option key={index} value={item._id}>
                    {item.name}
                  </option>
                );
              })}
          </select>

          <Multiselect
            className="mt-2 text-end"
            placeholder="التصنيف الفرعي"
            options={subCatOptions}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            style={{ color: "red" }}
          />
          <select
            name="brand"
            onChange={onSeletBrand}
            id="brand"
            className="select input-form-area mt-3 px-2 "
          >
            <option value="val">الماركة</option>
            {brand.data &&
              brand.data.map((item, index) => {
                return (
                  <option key={index} value={item._id}>
                    {item.name}
                  </option>
                );
              })}
          </select>

          <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
          <div className="mt-1 d-flex">
            {colors.length > 0 &&
              colors.map((color, index) => {
                return (
                  <div
                    key={index}
                    className="color ms-2 border  mt-1"
                    style={{ backgroundColor: color }}
                  ></div>
                );
              })}
            {/* <div
              className="color ms-2 border  mt-1"
              style={{ backgroundColor: "#E52C2C" }}
            ></div>
            <div
              className="color ms-2 border mt-1 "
              style={{ backgroundColor: "white" }}
            ></div>
            <div
              className="color ms-2 border  mt-1"
              style={{ backgroundColor: "black" }}
            ></div> */}
            <img
              onClick={onChangeColor}
              src={add}
              alt=""
              width="30px"
              height="35px"
              style={{ cursor: "pointer" }}
            />
            {showColor === true && (
              <CompactPicker onChangeComplete={handelChangeComplete} />
            )}
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={onSubmit} className="btn-save d-inline mt-2 ">
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminAddProducts;
