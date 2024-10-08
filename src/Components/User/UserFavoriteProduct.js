import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ProductCard from "./../Products/ProductCard";
import Pagination from "../Uitily/Pagination";
import CardProductsContainer from "../Products/CardProductsContainer";
import GetUserFavoriteProducts from "../../hook/favoriteProduct/get-user-favorite-products";
const UserFavoriteProduct = () => {
  const [items, itemsCount] = GetUserFavoriteProducts();

  return (
    <div>
      <div className="admin-content-text pb-4">قائمة المفضلة</div>
      <Row className="justify-content-start">
        {items.length > 0 ? (
          <CardProductsContainer products={items} title="" btntitle="" />
        ) : (
          <h6>لا توجد منتجات مفضله حاليا</h6>
        )}
      </Row>
      <Pagination />
    </div>
  );
};

export default UserFavoriteProduct;
