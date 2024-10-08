import React, { useEffect, useState } from "react";
import ViewSearchProductsHook from "../product/view-search-products-hook";

export default function NavbarSearshHook() {
  const [products, pagination, results, getPress, getProduct] =
    ViewSearchProductsHook();
  const [searchWord, setSearchWord] = useState("");

  const OnChangeSearch = (e) => {
    localStorage.setItem("searchWord", e.target.value);
    setSearchWord(e.target.value);
    const path = window.location.pathname;
    if (path != "/products") {
      window.location.href = "/products";
    }
  };
  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [searchWord]);

  return [OnChangeSearch, searchWord];
}
