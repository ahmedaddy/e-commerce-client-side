import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCoupon } from "../../redux/actions/couponAction";
import { getAllBrands } from "../../redux/actions/brandAction";

export default function CouponCardHook(coupon) {
  const dispatch = useDispatch();
  const dateString = coupon.expire;
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleClose = () => {
    setShow(false);
  };
  const handleOpen = () => {
    setShow(true);
  };
  const handelDelete = async () => {
    setLoading(true);
    await dispatch(deleteCoupon(coupon._id));
    setLoading(false);
    setShow(false);
    window.location.reload(false);
  };

  return [
    dateString,
    formatDate,
    show,
    handleClose,
    handleOpen,
    handelDelete,
    loading,
  ];
}
