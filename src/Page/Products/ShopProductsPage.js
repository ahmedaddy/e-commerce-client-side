import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import Pagination from "../../Components/Uitily/Pagination";
import SearchCountResult from "../../Components/Uitily/SearchCountResult";
import SideFilter from "../../Components/Uitily/SideFilter";
import useHomeProduct from "../../hook/product/home-product-hook";
import ViewSearchProductsHook from "../../hook/product/view-search-products-hook";

const ShopProductsPage = () => {
  const [products, pagination, results, getPress, getProduct] =
    ViewSearchProductsHook();

  let pageCount = pagination?.numberOfPages;

  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult
          onClick={getProduct}
          title={`There is ${results} search results`}
        />
        <Row className="d-flex flex-row">
          <Col sm="2" xs="2" md="1" className="d-flex">
            <SideFilter />
          </Col>
          <Col sm="10" xs="10" md="11">
            <CardProductsContainer products={products} title="" btntitle="" />
          </Col>
        </Row>
        <Pagination pageCount={pageCount} onPress={getPress} />
      </Container>
    </div>
  );
};

export default ShopProductsPage;
