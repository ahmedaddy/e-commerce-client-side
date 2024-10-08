import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrderCard } from "../../redux/actions/checkoutActon";
import AllCartHook from "../cart/all-cart-page-hook";
import notify from "../useNotifaction";
export default function CreateOrderCartHook() {
  const dispatch = useDispatch();
  const [, , , , , , cartId] = AllCartHook();
  const [loading, setLoading] = useState(true);
  // console.log(cartId);
  const handleCreateOrderCard = async (addressDetail, phone) => {
    if (cartId === "0") {
      notify("من فضلك اضف منتجات الى العربه اولا", "warn");
      return;
    }

    setLoading(true);
    await dispatch(
      createOrderCard(cartId, {
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

  const res = useSelector((state) => state.checkoutReducer.createOrderCard);

  useEffect(() => {
    if (!loading) {
      if (res && res.session && res.status === "success") {
        if (res.session.url) {
          window.open(res.session.url);
        }
        // console.log(res);
      } else {
        notify("فشل فى اكمال الطلب من فضلك حاول مره اخرى", "warn");
      }
    }
  }, [loading]);
  return [handleCreateOrderCard];
}
