import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import avatar from "../../images/avatar.png";
import add from "../../images/add.png";
import MultiImageInput from "react-multiple-image-input";

import { CompactPicker } from "react-color";
import { ToastContainer } from "react-toastify";
import EditProductsHook from "./../../hook/product/edit-products-hook";
import { productURL } from "../../Api/baseURL";
import ImageUploading from "react-images-uploading";

const AdminEditProducts = () => {
  const { id } = useParams();

  // const [CatID, BrandID, onChangeDesName, onChangeQty, onChangeColor, onChangePriceAfter, onChangePriceBefor, onChangeProdName, showColor, category, brand, priceAftr, images, setImages, onSelect, onRemove, options, handelChangeComplete, removeColor, onSeletCategory, handelSubmit, onSeletBrand, colors, priceBefore, qty, prodDescription, prodName] =
  //     AdminEditProductsHook(id);

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
    selectedSubCatOptions,
    qty,
    brandId,
    selectedSubId,
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
    onSelectBrand,
    onChangeColor,
    showColor,
    colors,
    onSubmit,
    removeColor,
  ] = EditProductsHook(id);
  // console.log(images);
  // const updatedImages = Array.isArray(images)
  //   ? images.map((item) => {
  //       return typeof item === "string" ? productURL + item : item;
  //     })
  //   : [];
  // console.log(selectedSubCatOptions);

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4"> تعديل المنتج -{title}</div>
        <Col sm="8">
          <div className="text-form pb-2"> صور المنتج</div>

          {images &&
            images.map((image) => {
              return <img src={productURL + image} alt="" width="100" />;
            })}
          {/* <MultiImageInput
            images={images}
            setImages={setImages}
            theme={"light"}
            allowCrop={false}
            max={4}
          /> */}
          {/* <ImageUploading
            multiple
            value={images}
            onChange={onChangeImages}
            maxNumber={4}
            dataURLKey="data_url">
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
                  {...dragProps}>
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
                          onClick={() => onImageUpdate(index)}>
                          Update
                        </button>
                        <button
                          className="btn btn-danger w-100"
                          onClick={() => onImageRemove(index)}>
                          Remove
                        </button>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            )}
          </ImageUploading> */}

          <input
            value={title}
            onChange={onChangeTitle}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم المنتج"
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="وصف المنتج"
            value={description}
            onChange={onChangeDescription}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر قبل الخصم"
            value={price}
            onChange={onChangePrice}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر بعد الخصم"
            value={priceAfterDiscount}
            onChange={onChangePriceAfterDiscount}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="الكمية المتاحة"
            value={qty}
            onChange={onChangeQuantity}
          />
          <select
            name="cat"
            value={catId}
            onChange={onSeletCategory}
            className="select input-form-area mt-3 px-2 ">
            <option value="0">التصنيف الرئيسي</option>
            {category.data
              ? category.data.map((item) => {
                  return <option value={item._id}>{item.name}</option>;
                })
              : null}
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
            <h4>
              التصنيفات الفرعية المحددة سابقا:
              {45 &&
                selectedSubCatOptions.map((item) => {
                  return <>{item}</>;
                })}
            </h4>
          <select
            name="brand"
            value={brandId}
            onChange={onSelectBrand}
            className="select input-form-area mt-3 px-2 ">
            <option value="0">اختر ماركة</option>
            {brand.data
              ? brand.data.map((item) => {
                  return <option value={item._id}>{item.name}</option>;
                })
              : null}
          </select>
          <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
          <div className="mt-1 d-flex">
            {colors.length >= 1
              ? colors.map((color, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => removeColor(color)}
                      className="color ms-2 border  mt-1"
                      style={{ backgroundColor: color }}></div>
                  );
                })
              : null}

            <img
              onClick={onChangeColor}
              src={add}
              alt=""
              width="30px"
              height="35px"
              style={{ cursor: "pointer" }}
            />
            {showColor === true ? (
              <CompactPicker onChangeComplete={handelChangeComplete} />
            ) : null}
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

export default AdminEditProducts;
