import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getProductsContainer1,
  getProductsContainer2,
} from "../../redux/actions/productAction";

const useHomeProduct = () => {
  const dispatch = useDispatch();

  // Fetch products on component mount
  useEffect(() => {
    dispatch(getProductsContainer1("66ddd5b073e0e35815da7b44"));
    dispatch(getProductsContainer2("66ddc95593e227fe476cb876"));
  }, [dispatch]);

  const products1 = useSelector(
    (state) => state.allProducts?.productContainer1
  );
  const products2 = useSelector(
    (state) => state.allProducts?.productContainer2
  );
  const loading = useSelector((state) => state.allProducts?.loading);
  // console.log(products2);
  return [products1, products2, loading];
};

export default useHomeProduct;
