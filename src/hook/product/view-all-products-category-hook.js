import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsInSpecificCategory } from "../../redux/actions/productAction";

const ViewAllProductsCategoryHook = (catID) => {
  const dispatch = useDispatch();
  let limit = 8;

  const getProduct = async () => {
    await dispatch(getProductsInSpecificCategory(limit, "", catID));
  };
  useEffect(() => {
    getProduct();
  }, []);
  const onPress = async (page) => {
    await dispatch(getProductsInSpecificCategory(limit, page, catID));
  };
  const allProducts = useSelector((state) => state.allProducts.productCat);

  let items = [];
  let pagination = [];
  try {
    if (allProducts.data) items = allProducts.data;
    else items = [];
  } catch (e) {}
  try {
    if (allProducts.paginationResult)
      pagination = allProducts.paginationResult.numberOfPages;
    else pagination = [];
  } catch (e) {}

  return [items, pagination, onPress];
};

export default ViewAllProductsCategoryHook;
