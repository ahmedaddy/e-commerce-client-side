import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCoupon, getAllCoupons } from "../../redux/actions/couponAction";
import notify from "../useNotifaction";

export default function AddCouponHook() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [discount, setDiscount] = useState("");
  const [loading, setLoading] = useState(true);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleDiscount = (e) => {
    setDiscount(e.target.value);
  };

  const onSubmit = async () => {
    if (name === "" && date === "" && discount === "") {
      notify("Please enter all information.", "warn");
    }
    if (discount > 100) {
      notify("The maximum discount is 100%.", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      createCoupon({
        name: name,
        discount: discount,
        expire: date,
      })
    );
    setLoading(false);
  };

  const resCoupon = useSelector((state) => state.couponReducer.createCoupon);
  // console.log(resCoupon);
  useEffect(() => {
    if (!loading) {
      if (resCoupon) {
        if (resCoupon.data) {
          notify("Discount code has been created successfully.", "success");
          setTimeout(() => {
            window.location.reload(false);
          }, 1000);
        }
      }
    }
  }, [loading]);

  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCoupons());
    };
    get();
  }, []);

  const resCoupons = useSelector((state) => state.couponReducer.coupon);
  const coupons = resCoupons?.data;

  return [
    name,
    date,
    discount,
    handleName,
    handleDate,
    handleDiscount,
    onSubmit,
    coupons,
    loading,
  ];
}
