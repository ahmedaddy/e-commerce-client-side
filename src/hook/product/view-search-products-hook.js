import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getAllProductsSearch,
} from "../../redux/actions/productAction";

const ViewSearchProductsHook = () => {
  let limit = 8;
  const dispatch = useDispatch();

  const getProduct = async () => {
    const { word, queryCat, brandCat, pricefromString, priceToString, sort } =
      getStoredValues();
    await dispatch(
      getAllProductsSearch(
        `sort=${sort}&limit=${limit}&keyword=${word}&${queryCat}&${brandCat}${pricefromString}${priceToString}`
      )
    );
  };
  useEffect(() => {
    getProduct();
  }, []);

  const allProducts = useSelector((state) => state.allProducts.product);
  const products = allProducts?.data;
  const pagination = allProducts?.paginationResult;
  const results = allProducts?.results;
  // console.log(products);

  const getPress = async (page) => {
    const { word, queryCat, brandCat, pricefromString, priceToString, sort } =
      getStoredValues();
    await dispatch(
      getAllProductsSearch(
        `sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${queryCat}&${brandCat}${pricefromString}${priceToString}`
      )
    );
  };

  const getStoredValues = () => {
    let word = localStorage.getItem("searchWord") || "";
    let queryCat = localStorage.getItem("catCecked") || "";
    let brandCat = localStorage.getItem("brandCecked") || "";
    let priceFrom = localStorage.getItem("priceFrom") || "";
    let priceTo = localStorage.getItem("priceTo") || "";
    let sortType = localStorage.getItem("sortType") || "";

    let pricefromString =
      priceFrom && priceFrom > 0 ? `&price[gte]=${priceFrom}` : "";
    let priceToString = priceTo && priceTo > 0 ? `&price[lte]=${priceTo}` : "";

    let sort;
    switch (sortType) {
      case "السعر من الاقل للاعلي":
        sort = "price";
        break;
      case "السعر من الاعلي للاقل":
        sort = "-price";
        break;
      case "الاكثر مبيعا":
        sort = "-sold";
        break;
      case "الاعلي تقييما":
        sort = "-quantity";
        break;
      default:
        sort = "";
    }
    return {
      word,
      queryCat,
      brandCat,
      pricefromString,
      priceToString,
      sort,
    };
  };
  return [products, pagination, results, getPress, getProduct];
};

export default ViewSearchProductsHook;
