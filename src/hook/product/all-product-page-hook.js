import { useSelector, useDispatch } from "react-redux";
import {
  getAllProducts,
  getAllProductsPage,
} from "../../redux/actions/productAction";
import { useEffect } from "react";

const AllBrandHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const get = async () => {
      await dispatch(getAllProducts(20));
    };
    get();
  }, []);

  // get state from redux
  const product = useSelector((state) => state.allProducts.allProduct);
  const loading = useSelector((state) => state.allProducts.loading);

  // get page count
  let pageCount = 0;
  try {
    if (product.paginationResult) {
      pageCount = product.paginationResult.numberOfPages;
    }
  } catch (e) {}

  // on prees pagination
  const getPage = (page) => {
    dispatch(getAllProductsPage(page, 20));
  };

  return [loading, brand, pageCount, getPage];
};

export default AllBrandHook;
