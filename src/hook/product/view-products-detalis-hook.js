import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneProduct,
  getAllProductsFav,
  getProductsInSpecificCategory,
} from "../../redux/actions/productAction";
import mobile from "../../images/mobile.png";

const ViewProductDetailsHook = (productId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneProduct(productId));
  }, [productId]);

  const oneProducts = useSelector((state) => state.allProducts.oneProduct);

  // console.log(oneProducts?.data?.category?._id);

  const catID = oneProducts?.data?.category?._id;
  useEffect(() => {
    dispatch(getProductsInSpecificCategory(4, 1, catID));
  }, [productId]);

  const prod = useSelector((state) => state.allProducts.productCat);

  // console.log(prod?.data);
  try {
    var item = oneProducts?.data || [];
  } catch (e) {
    item = e;
  }

  const category = item?.category || {};
  const brand = item?.brand || {};
  // console.log(oneProducts);
  const images = (item.images || [{ original: `${mobile}` }]).map((img) => ({
    original: img,
  }));
  // const images = oneProducts.data?.images || [];
  // console.log(category.name);
  // console.log(category.name);

  return [item, images, category, brand, prod];
};
export default ViewProductDetailsHook;
