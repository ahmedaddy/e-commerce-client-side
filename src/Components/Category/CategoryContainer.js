import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "./../Category/CategoryCard";
import { Spinner } from "react-bootstrap";

const CategoryContainer = ({ data, loading }) => {
  const colors = [
    "#A98C4D",
    "#F4DBA5",
    "#55CFDF",
    "#FF6262",
    "#0034FF",
    "#555555",
  ];

  return (
    <Container>
      <div className="admin-content-text mt-2 ">All Categories</div>
      <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
          data ? (
            data.map((item, index) => {
              return (
                <CategoryCard
                  key={index}
                  id={item._id}
                  title={item.name}
                  img={item.image}
                  background={colors[Math.floor(Math.floor(Math.random() * 6))]}
                />
              );
            })
          ) : (
            <h4>There are no categories.</h4>
          )
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Row>
    </Container>
  );
};

export default CategoryContainer;
