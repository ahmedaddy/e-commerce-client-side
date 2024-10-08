import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrderCash } from "../../redux/actions/checkoutActon";
import AllCartHook from "../cart/all-cart-page-hook";
import notify from "../useNotifaction";
import { useNavigate } from "react-router-dom";

export default function CreateOrderCashHook(addressDetail, phone) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [, , , , , , cartId] = AllCartHook();
  // console.log(cartId);

  const handleCreateOrderCash = async () => {
    if (cartId === "0") {
      notify("من فضلك اضف منتجات الى العربه اولا", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      createOrderCash(cartId, {
        shippingAddress: {
          details: addressDetail,
          phone: phone,
          city: "",
          postalCode: "",
        },
      })
    );
    setLoading(false);
  };
  const res = useSelector((state) => state.checkoutReducer.createOrderCash);
  // console.log(res);
  useEffect(() => {
    if (!loading) {
      if (res && res.status === "success") {
        notify("تم انشاء طلبك بنجاح", "success");
        setTimeout(() => {
          navigate("/user/allorders");
        }, 1500);
      } else {
        notify("فشل فى اكمال الطلب من فضلك حاول مره اخرى", "warn");
      }

      // console.log(res);
    }
  }, [loading]);
  return [handleCreateOrderCash];
}
