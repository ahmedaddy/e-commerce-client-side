import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import MultiImageInput from "react-multiple-image-input";
import { ToastContainer } from "react-toastify";
import EditProductsHook from "./../../hook/product/edit-products-hook";

export const AdminEditProducts = () => {
  const { id } = useParams();
  console.log(id);

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
    onSeletBrand,
    onChangeColor,
    showColor,
    colors,
    onSubmit,
    removeColor,
    subCat,
  ] = EditProductsHook(id);

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4"> تعديل المنتج -{title}</div>
        <Col sm="8">
          <div className="text-form pb-2"> صور للمنتج</div>

          <MultiImageInput
            images={images}
            setImages={setImages}
            theme={"light"}
            allowCrop={false}
            max={4}
          />

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
            className="select input-form-area mt-3 px-2 "
          >
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
            value={subCat}
            displayValue="name"
            style={{ color: "red" }}
          />
          <select
            name="brand"
            // value={BrandID}
            // onChange={onSeletBrand}
            className="select input-form-area mt-3 px-2 "
          >
            <option value="0">اختر ماركة</option>
            {brand.data
              ? brand.data.map((item) => {
                  return (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  );
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
                      style={{ backgroundColor: color }}
                    ></div>
                  );
                })
              : null}

            {/* <img onClick={onChangeColor} src={add} alt="" width="30px" height="35px" style={{ cursor: 'pointer' }} />
                        {
                            showColor === true ? <CompactPicker onChangeComplete={handelChangeComplete} /> : null
                        } */}
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button
            // onClick={handelSubmit}
            className="btn-save d-inline mt-2 "
          >
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};
