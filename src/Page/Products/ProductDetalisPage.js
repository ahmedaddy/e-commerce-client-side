import React from "react";
import { Container } from "react-bootstrap";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import ProductDetalis from "../../Components/Products/ProductDetalis";
import RateContainer from "../../Components/Rate/RateContainer";
import { useParams } from "react-router-dom";
import ViewProductDetailsHook from "../../hook/product/view-products-detalis-hook";

const ProductDetalisPage = () => {
  const { id } = useParams();
  const [item, images, category, brand, prod] = ViewProductDetailsHook(id);
  try {
    if (prod) var product = prod.data;
  } catch (e) {}
  try {
    if (item) {
      var rateAvg = item.ratingsAverage || 0;
      var rateQty = item.ratingsQuantity || 0;
    }
  } catch (e) {}

  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <ProductDetalis
          category={category}
          brand={brand}
          product={item}
          images={images}
        />
        <RateContainer rateAvg={rateAvg} rateQty={rateQty} />
        <CardProductsContainer products={product} title="منتجات قد تعجبك" />
      </Container>
    </div>
  );
};

export default ProductDetalisPage;
