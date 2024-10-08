import React from "react";
import { Row } from "react-bootstrap";
import SideSearshHook from "../../hook/searsh/side-searsh-hook";

const SideFilter = () => {
  const [
    onPriceFromChange,
    onPriceToChange,
    category,
    brand,
    clickedCategories,
    selectedCategory,
    clickedBrands,
    selectedBrand,
  ] = SideSearshHook();
  const priceFrom = localStorage.getItem("priceFrom");
  const priceTo = localStorage.getItem("priceTo");
  return (
    <div className="mt-3">
      <Row>
        <div className="d-flex flex-column mt-2">
          <div className="filter-title">Category</div>
          <div className="d-flex mt-3">
            <input onChange={clickedCategories} type="checkbox" value="0" />
            <div className="filter-sub me-2 fw-bold mx-2">All</div>
          </div>

          {category ? (
            category.map((item, index) => {
              return (
                <div key={index} className="d-flex mt-2">
                  <input
                    type="checkbox"
                    value={item._id}
                    onChange={clickedCategories}
                    checked={selectedCategory === item._id}
                  />
                  <div className="filter-sub mx-2 ">{item.name}</div>
                </div>
              );
            })
          ) : (
            <h6>There are no categories.</h6>
          )}
        </div>

        <div className="d-flex flex-column mt-2">
          <div className="filter-title mt-3">Brand</div>
          <div className="d-flex mt-3">
            <input onChange={clickedBrands} type="checkbox" value="0" />
            <div className="filter-sub me-2 fw-bold mx-2">All</div>
          </div>

          {brand ? (
            brand.map((item, index) => {
              return (
                <div key={index} className="d-flex mt-2">
                  <input
                    type="checkbox"
                    value={item._id}
                    onChange={clickedBrands}
                    checked={selectedBrand === item._id}
                  />
                  <div className="filter-sub mx-2 ">{item.name}</div>
                </div>
              );
            })
          ) : (
            <h6>There are no brands.</h6>
          )}
        </div>

        <div className="filter-title my-3">Price</div>
        <div className="d-flex">
          <p className="filter-sub my-2">From:</p>
          <input
            onChange={onPriceFromChange}
            value={priceFrom}
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
          />
        </div>
        <div className="d-flex">
          <p className="filter-sub my-2">To:</p>
          <input
            onChange={onPriceToChange}
            value={priceTo}
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
          />
        </div>
      </Row>
    </div>
  );
};

export default SideFilter;
