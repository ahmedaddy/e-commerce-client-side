import {
  GET_ALL_PRODUCTS,
  CREATE_PRODUCT,
  GET_ONE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_ERROR,
  GET_ALL_PRODUCT_CATEGORY,
  GET_ALL_PRODUCT_BRAND,
  GET_ALL_PRODUCTS_SEARSH,
  GET_ALL_PRODUCTS_CONTAINER1,
  GET_ALL_PRODUCTS_CONTAINER2,
} from "../type";

const initial = {
  product: [],
  allProduct: [],
  oneProduct: [],
  updateProduct: [],
  productCat: [],
  productBrand: [],
  productContainer1: [],
  productContainer2: [],
  loading: true,
};
const productReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        loading: false,
        allProduct: action.payload,
      };
    case GET_ALL_PRODUCTS_CONTAINER1:
      return {
        ...state,
        loading: false,
        productContainer1: action.payload,
      };
    case GET_ALL_PRODUCTS_CONTAINER2:
      return {
        ...state,
        loading: false,
        productContainer2: action.payload,
      };
    case GET_ALL_PRODUCTS_SEARSH:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case CREATE_PRODUCT:
      return {
        loading: false,
        product: action.payload,
      };
    case GET_ONE_PRODUCT:
      return {
        loading: false,
        oneProduct: action.payload,
      };
    case DELETE_PRODUCT:
      return {
        loading: false,
        product: action.payload,
      };

    case UPDATE_PRODUCT:
      return {
        loading: false,
        updateProduct: action.payload,
      };

    case GET_ERROR:
      return {
        loading: true,
        product: action.payload,
      };
    case GET_ALL_PRODUCT_CATEGORY:
      return {
        loading: true,
        productCat: action.payload,
      };
    case GET_ALL_PRODUCT_BRAND:
      return {
        loading: true,
        productBrand: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
