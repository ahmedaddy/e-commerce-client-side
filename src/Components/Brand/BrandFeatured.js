import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SubTiltle from "../Uitily/SubTiltle";
import BrandCard from "./BrandCard";
import brand1 from "../../images/brand1.png";
import brand2 from "../../images/brand2.png";
import brand3 from "../../images/brand3.png";
import useHomeBrand from "../../hook/brand/home-brand-hook";

const BrandFeatured = ({ title, btntitle }) => {
  const [brand, loading] = useHomeBrand();
  // console.log(brand);
  return (
    <Container>
      <SubTiltle title={title} btntitle={btntitle} pathText="/allbrand" />
      <Row className="my-1 d-flex justify-content-between">
        {loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          brand &&
          brand.data &&
          brand.data
            .slice(0, 5)
            .map((item, index) => (
              <BrandCard key={index} id={item._id} img={item.image} />
            ))
        )}
        {/* <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand2} />
        <BrandCard img={brand1} />
        <BrandCard img={brand3} /> */}
      </Row>
    </Container>
  );
};

export default BrandFeatured;
