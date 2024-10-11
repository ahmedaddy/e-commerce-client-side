import React, { useEffect, useState } from "react";
import {
  Navbar,
  Container,
  FormControl,
  Nav,
  NavDropdown,
} from "react-bootstrap";

import logo from "../../images/logo.png";
import login from "../../images/login.png";

import { IoCart } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

// import NavbarSearchHook from "./../../hook/search/navbar-search-hook";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUser } from "./../../redux/actions/authAction";
import GetAllOrdersHook from "../../hook/orders/get-all-orders-hook";
import AllCartHook from "../../hook/cart/all-cart-page-hook";
import NavbarSearshHook from "../../hook/searsh/navbar-searsh-hook";
import GetUserFavoriteProducts from "../../hook/favoriteProduct/get-user-favorite-products";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

// import GetAllUserCartHook from "./../../hook/cart/get-all-user-cart-hook";
const NavBarLogin = () => {
  //const dispatch = useDispatch()

  const [OnChangeSearch, searchWord] = NavbarSearshHook();
  let word = "";
  if (localStorage.getItem("searchWord") != null)
    word = localStorage.getItem("searchWord");

  const [user, setUser] = useState("");
  useEffect(() => {
    if (localStorage.getItem("user") != null)
      setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser("");
  };
  // console.log(Object.keys(user).length);
  // console.log(user);
  const [
    loading,
    numberOfCartItems,
    couponName,
    cartItems,
    totalCartPrice,
    totalCartPriceAfterDiscount,
  ] = AllCartHook();

  const [items, itemsCount] = GetUserFavoriteProducts();

  return (
    <Navbar className="navBar sticky-top " bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <a href="/">
            <img src={logo} className="logo" alt="logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex align-items-cente w-100">
            <FormControl
              value={word}
              onChange={OnChangeSearch}
              type="search"
              placeholder="Search..."
              className="w-100 text-center "
              aria-label="Search"
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              name="searsh"
              id="searsh"
              style={{ borderRadius: "5px 0 0 5px" }}
            />
            <a href="/products">
              <IoIosSearch
                style={{
                  color: "#fff",
                  backgroundColor: "var(--main-color)",
                  height: "100%",
                  fontSize: "50px",
                  borderRadius: "0 5px 5px 0",
                  padding: "8px",
                  cursor: "pointer",
                }}
              />
            </a>
          </div>
          <Nav className="me-auto d-flex align-items-center">
            <Nav.Link
              href="/cart"
              className="nav-text position-relative d-flex m-0 justify-content-center flex-column align-items-center"
              style={{ color: "white", width: "50px" }}
            >
              <IoCart className="login-img" />
              <p style={{ color: "white" }} className="m-0">
                Cart
              </p>
              <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                {numberOfCartItems || 0}
              </span>
            </Nav.Link>
            {user.role === "user" ? (
              <Nav.Link
                href="/user/favoriteproducts"
                className="nav-text position-relative d-flex m-0 justify-content-center flex-column align-items-center"
                style={{ color: "white", width: "50px" }}
              >
                <FaRegHeart className="login-img m-auto" />
                <p style={{ color: "white" }} className="m-0">
                  Favorites
                </p>
                <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                  {itemsCount > 0 ? itemsCount : 0}
                </span>
              </Nav.Link>
            ) : (
              ""
            )}
            {Object.keys(user).length > 0 ? (
              <NavDropdown
                className="nav-bar-dropDown text-center right-0"
                title={user.name}
                id="basic-nav-dropdown"
              >
                {user.role === "admin" ? (
                  <NavDropdown.Item href="/admin/allproducts">
                    Control panel
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item href="/user/profile">
                    Personal page
                  </NavDropdown.Item>
                )}
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logOut} href="/">
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Nav.Link
                  href="/login"
                  className="nav-text d-flex m-0 align-items-center justify-content-center flex-column"
                  style={{ width: "80px" }}
                >
                  <CgProfile className="login-img" />
                  <p style={{ color: "white" }} className="m-0">
                    Log in
                  </p>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLogin;
