import { useSelector, useDispatch } from "react-redux";
import { applyCoupon } from "../../redux/actions/cartAction";
import { useEffect, useState } from "react";
import notify from "../useNotifaction";

const ApplyCouponHook = (cartItems) => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const [couponName, setCouponName] = useState("");

  const handleCouponInput = (e) => {
    setCouponName(e.target.value);
  };

  const handleSubmitCoupon = async () => {
    if (couponName === "") {
      notify("Please enter coupon", "warn");
      return;
    }
    setloading(true);
    await dispatch(applyCoupon({ coupon: couponName }));
    setloading(false);
  };

  const res = useSelector((state) => state.cartReducer.applyCoupon);
  useEffect(() => {
    if (!loading) {
      // console.log(res);
      if (res && res.status === 200) {
        notify("Coupon applied successfully", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      }
      if (res && res.status === 404) {
        notify("This coupon is invalid or expired.", "warn");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      }
    }
  }, [loading, res]);

  const handelCheckout = () => {
    if (cartItems.length >= 1) {
      window.location.href = "/order/paymethoud";
    } else {
      notify("Please add products to the cart first.", "warn");
    }
  };

  return [handleSubmitCoupon, handleCouponInput, couponName, handelCheckout];
};

export default ApplyCouponHook;
