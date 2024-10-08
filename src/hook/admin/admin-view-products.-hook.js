import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllProducts,
  getAllProductsPage,
} from "../../redux/actions/productAction";

function AdminViewProducts() {
  const dispatch = useDispatch();

  const get = async () => {
    await dispatch(getAllProducts(8));
  };
  useEffect(() => {
    get();
    // dispatch(getAllProducts(8));
  }, [dispatch]);

  const onPress = async (page) => {
    await dispatch(getAllProductsPage(page, 8));
  };

  const res = useSelector((state) => state.allProducts.allProduct);
  const items = res?.data;
  const pagination = res?.paginationResult?.numberOfPages;
  // console.log(res);
  // console.log(items);
  // console.log(pagination);
  return [items, pagination, onPress];
}

export default AdminViewProducts;
