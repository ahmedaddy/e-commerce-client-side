import { combineReducers } from "redux";

import categoryReducer from "./categoryReducer";
import brandReducer from "./brandReducer";
import productReducer from "./productReducer";
import reviewReducer from "./reviewReducer";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import wishListReducer from "./wishListReducer";
import subCategoryReducer from "./subCategoryReducer";
import orderReducer from "./ordersReducer";
import couponReducer from "./couponReducer";
import checkoutReducer from "./checkoutReducer";

export default combineReducers({
  allCategory: categoryReducer,
  allBrands: brandReducer,
  allProducts: productReducer,
  allReview: reviewReducer,
  authReducer: authReducer,
  cartReducer: cartReducer,
  wishList: wishListReducer,
  subCategory: subCategoryReducer,
  orderReducer: orderReducer,
  couponReducer: couponReducer,
  checkoutReducer,
});
