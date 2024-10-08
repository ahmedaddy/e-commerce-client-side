import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // For the menu icon

const UserSideBar = () => {
  const navigate = useNavigate(); // For programmatic navigation

  const handleLinkClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <div className="sidebar">
        <div className="d-flex flex-column">
          <div
            onClick={() => handleLinkClick("/user/allorders")}
            className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center"
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            اداره الطلبات
          </div>
          <div
            onClick={() => handleLinkClick("/user/favoriteproducts")}
            className="admin-side-text my-1 border-bottom p-2 mx-auto text-center"
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            المنتجات المفضلة
          </div>
          <div
            onClick={() => handleLinkClick("/user/addresses")}
            className="admin-side-text my-1 border-bottom p-2 mx-auto text-center"
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            العنوانين الشخصية
          </div>
          <div
            onClick={() => handleLinkClick("/user/profile")}
            className="admin-side-text my-1 border-bottom p-2 mx-auto text-center"
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            الملف الشخصي
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSideBar;
