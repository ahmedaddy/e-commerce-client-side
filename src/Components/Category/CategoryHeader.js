import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import AllCategoryHook from "../../hook/category/all-category-page-hook";
const CategoryHeader = () => {
  const [loading, category, pageCount, getPage] = AllCategoryHook();

  const [items, setItems] = useState([]);
  useEffect(() => {
    if (category) setItems(category.data);
  }, [category]);

  // console.log(items[0].image);

  return (
    <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            {items ? (
              items.map((item, index) => (
                <div key={index} className="cat-text-header">
                  <Link to={`/products/category/${item._id}`}>
                    <div>{item.name}</div>
                  </Link>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
            <Link to="/allcategory" style={{ textDecoration: "none" }}>
              <div className="cat-text-header">more</div>
            </Link>
            {/* <div className="cat-text-header ">الكل</div>
            <div className="cat-text-header">الكترونيات</div>
            <div className="cat-text-header">ملابس</div>
            <div className="cat-text-header"> كهربيه</div>
            <div className="cat-text-header">تخفيضات</div>
            <div className="cat-text-header">تخفيضات</div>
            <div className="cat-text-header">تخفيضات</div>
            <div className="cat-text-header">تخفيضات</div>
            <div className="cat-text-header">تخفيضات</div>
            <div className="cat-text-header">المزيد</div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryHeader;
