import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsInSpecificBrand } from "../../redux/actions/productAction";

const ViewAllProductsBrandHook = (brandID) => {
  const dispatch = useDispatch();
  let limit = 8;

  const getProduct = async () => {
    await dispatch(getProductsInSpecificBrand(limit, "", brandID));
  };
  useEffect(() => {
    getProduct();
  }, []);
  const onPress = async (page) => {
    await dispatch(getProductsInSpecificBrand(limit, page, brandID));
  };
  const allProducts = useSelector((state) => state.allProducts.productBrand);
  // console.log(allProducts);
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

export default ViewAllProductsBrandHook;
