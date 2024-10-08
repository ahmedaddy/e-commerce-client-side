import React from "react";
import BrandContainer from "../../Components/Brand/BrandContainer";
import Pagination from "../../Components/Uitily/Pagination";
import AllBrandHook from "../../hook/brand/all-brands-page-hook";

const AllBrand = () => {
  const [loading, brand, pageCount, getPage] = AllBrandHook();
  console.log(brand);
  return (
    <div style={{ minHeight: "670px" }}>
      <BrandContainer loading={loading} data={brand.data} />
      {pageCount > 1 ? (
        <Pagination pageCount={pageCount} onPress={getPage} />
      ) : null}{" "}
    </div>
  );
};

export default AllBrand;
