import React, { useEffect, useState } from "react";
import ViewSearchProductsHook from "../product/view-search-products-hook";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { getAllBrands } from "../../redux/actions/brandAction";
import { useDispatch, useSelector } from "react-redux";

export default function SideSearshHook() {
  const [products, pagination, results, getPress, getProduct] =
    ViewSearchProductsHook();
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);

  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCategory());
      await dispatch(getAllBrands());
    };
    get();
  }, []);

  //to get state from redux
  const allCat = useSelector((state) => state.allCategory.category);
  //to get state from redux
  const allBrand = useSelector((state) => state.allBrands.brand);

  let category = [];
  try {
    if (allCat.data) category = allCat.data;
  } catch (e) {}

  // console.log(category);
  let brand = [];
  try {
    if (allBrand.data) brand = allBrand.data;
  } catch (e) {}

  // console.log(brand);

  var queryCat = "",
    queryBrand = "";
  const [catChecked, setCatChecked] = useState([]);
  const [brandChecked, setBrandChecked] = useState([]);

  const clickedCategories = (e) => {
    let value = e.target.value;
    setSelectedCategory(value === selectedCategory ? null : value);
    if (value === "0") {
      setCatChecked([]);
    } else {
      if (e.target.checked === true) {
        setCatChecked([value]);
      } else if (e.target.checked === false) {
        const newArry = catChecked.filter((e) => e !== value);
        setCatChecked(newArry);
      }
    }
  };

  const clickedBrands = (e) => {
    let value = e.target.value;
    setSelectedBrand(value === selectedBrand ? null : value);
    if (value === "0") {
      setBrandChecked([]);
    } else {
      if (e.target.checked === true) {
        setBrandChecked([value]);
      } else if (e.target.checked === false) {
        const newArry = brandChecked.filter((e) => e !== value);
        setBrandChecked(newArry);
      }
    }
  };

  useEffect(() => {
    queryCat = catChecked.map((val) => "category[in][]=" + val).join("&");
    localStorage.setItem("catCecked", queryCat);

    queryCat = brandChecked.map((val) => "brand[in][]=" + val).join("&");
    localStorage.setItem("brandCecked", queryCat);

    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [catChecked, brandChecked]);

  const [From, setPriceFrom] = useState(0);
  const [To, setToFrom] = useState(0);

  const onPriceFromChange = (e) => {
    localStorage.setItem("priceFrom", e.target.value);
    setPriceFrom(e.target.value);
  };
  const onPriceToChange = (e) => {
    localStorage.setItem("priceTo", e.target.value);
    setToFrom(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [From, To]);

  return [
    onPriceFromChange,
    onPriceToChange,
    category,
    brand,
    clickedCategories,
    selectedCategory,
    clickedBrands,
    selectedBrand,
  ];
}
