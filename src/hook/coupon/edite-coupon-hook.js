import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createCoupon,
  getAllCoupons,
  getOneCoupon,
  updateCoupon,
} from "../../redux/actions/couponAction";
import notify from "../useNotifaction";

export default function EditCouponHook(id) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [discount, setDiscount] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    const get = async () => {
      setLoadingData(true);
      await dispatch(getOneCoupon(id));
      setLoadingData(false);
    };
    get();
  }, []);

  const resOneCoupon = useSelector((state) => state.couponReducer.oneCoupon);
  // console.log(resOneCoupon);
  useEffect(() => {
    if (!loadingData && resOneCoupon.data) {
      setDate(resOneCoupon.data.expire);
      setName(resOneCoupon.data.name);
      setDiscount(resOneCoupon.data.discount);
    }
  }, [loadingData]);

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
      notify("المرجو إدخال كل المعلومات", "warn");
    }
    if (discount > 100) {
      notify("الحد الأعلى للخصم هو 100%", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      updateCoupon(id, {
        name: name,
        discount: discount,
        expire: date,
      })
    );
    setLoading(false);
  };

  const resCoupon = useSelector((state) => state.couponReducer.updateCoupon);
  // console.log(resCoupon);
  useEffect(() => {
    if (!loading) {
      if (resCoupon) {
        if (resCoupon.data) {
          notify("تم تحديث كود الخصم بنجاح", "success");
          setTimeout(() => {
            window.location.reload(false);
          }, 1000);
        }
      }
    }
  }, [loading]);

  return [
    name,
    date,
    discount,
    handleName,
    handleDate,
    handleDiscount,
    onSubmit,
    loading,
  ];
}
