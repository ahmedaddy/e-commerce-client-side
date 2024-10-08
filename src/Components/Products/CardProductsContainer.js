import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTiltle from "../Uitily/SubTiltle";
import ProductCard from "./ProductCard";
import useHomeProduct from "../../hook/product/home-product-hook";
import CardContainerHook from "../../hook/product/card-container-hook";

const CardProductsContainer = ({ products, title, btntitle, pathText }) => {
  // console.log(products);

  const [favProd] = CardContainerHook();

  return (
    <Container>
      {products ? (
        <SubTiltle title={title} btntitle={btntitle} pathText={pathText} />
      ) : null}
      <Row className="my-2 d-flex justify-content-between">
        {products
          ? products.map((item, index) => (
              <ProductCard key={index} favProd={favProd} item={item} />
            ))
          : null}
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
