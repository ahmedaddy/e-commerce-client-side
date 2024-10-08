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
      notify("من فضلك أدخل الكوبون", "warn");
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
        notify("تم تطبيق الكوبون بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      }
      if (res && res.status === 404) {
        notify("هذا الكوبون غير صحيح او منتهى الصلاحيه", "warn");
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
      notify("من فضلك اضف منتجات للعربة اولا", "warn");
    }
  };

  return [handleSubmitCoupon, handleCouponInput, couponName, handelCheckout];
};

export default ApplyCouponHook;
