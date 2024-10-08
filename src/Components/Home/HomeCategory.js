import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SubTiltle from "../Uitily/SubTiltle";
import CategoryCard from "./../Category/CategoryCard";
import useHomeCategory from "../../hook/category/home-category-hook";

const HomeCategory = () => {
  const [category, loading, colors] = useHomeCategory();
  // console.log(category);
  return (
    <Container>
      <SubTiltle title="Categories" btntitle="more" pathText="/allcategory" />
      <Row className="my-2 d-flex justify-content-between">
        {loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          category &&
          category.data &&
          category.data.length > 0 &&
          category.data
            .slice(0, 5)
            .map((item, index) => (
              <CategoryCard
                key={index}
                id={item._id}
                title={item.name}
                img={item.image}
                background={colors[index]}
              />
            ))
        )}
      </Row>
    </Container>
  );
};

export default HomeCategory;
