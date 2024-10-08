import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductGallery from "./ProductGallery";
import ProductText from "./ProductText";

const ProductDetalis = ({ product, category, brand, images }) => {
  // console.log(product);
  return (
    <div>
      <Row className="py-3">
        <Col lg="5">
          <ProductGallery images={images} />
        </Col>

        <Col lg="7">
          {/* <ProductText category={category} brand={brand} product={product} /> */}
          <ProductText product={product} category={category} brand={brand} />
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetalis;
