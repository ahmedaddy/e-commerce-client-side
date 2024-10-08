import React from "react";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import NavBarLogin from "../../Components/Uitily/NavBarLogin";
import Silder from "./../../Components/Home/Silder";
import DiscountSection from "./../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeatured";
import Footer from "../../Components/Uitily/Footer";
import useHomeProduct from "../../hook/product/home-product-hook";
const HomePage = () => {
  const [products1, products2, loading] = useHomeProduct();

  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Silder />
      <HomeCategory />
      <CardProductsContainer
        products={products1?.data}
        title="Latest computers"
        btntitle="more"
        pathText="/products"
      />
      <DiscountSection />
      <CardProductsContainer
        products={products2?.data}
        title="Latest kitchen tools"
        btntitle="more"
        pathText="/products"
      />
      <BrandFeatured title="The most famous brands" btntitle="more" />
    </div>
  );
};

export default HomePage;
