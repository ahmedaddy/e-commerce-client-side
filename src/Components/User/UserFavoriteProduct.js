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
      {/* Favorite list heading */}
      <div className="admin-content-text pb-4">Favorite List</div>
      
      <Row className="justify-content-start">
        {/* If there are items, show them in the CardProductsContainer component, otherwise show a message */}
        {items.length > 0 ? (
          <CardProductsContainer products={items} title="" btntitle="" />
        ) : (
          <h6>No favorite products at the moment</h6>
        )}
      </Row>
      
      {/* Pagination component for navigating through multiple pages of favorite products */}
      <Pagination />
    </div>
  );
};

export default UserFavoriteProduct;
