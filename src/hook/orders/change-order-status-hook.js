import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeOrderToDelivery,
  changeOrderToPay,
} from "../../redux/actions/ordersActions";
import notify from "../useNotifaction";

const ChangeOrderStatusHook = (id) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const [delivery, setDelivery] = useState(null);
  const [pay, setPay] = useState(null);

  const handleDelevery = (e) => {
    setDelivery(e.target.value);
  };
  const handlePay = (e) => {
    setPay(e.target.value);
  };

  const changeDelivery = async () => {
    if (delivery === "true") {
      setLoading(true);
      await dispatch(changeOrderToDelivery(id));
      setLoading(false);
    } else if (delivery === "0") {
      notify("Please select a value", "warn");
      return;
    }
  };
  const changePay = async () => {
    if (pay === "true") {
      setLoading(true);
      await dispatch(changeOrderToPay(id));
      setLoading(false);
    } else if (delivery === "0") {
      notify("Please select a value", "warn");
      return;
    }
  };

  const deliveryRes = useSelector((state) => state.orderReducer.changeDelevery);
  const payRes = useSelector((state) => state.orderReducer.changePay);
  // console.log(deliveryRes);
  useEffect(() => {
    if (!loading) {
      if (deliveryRes && deliveryRes.status === 201) {
        notify("Delivery status changed successfully.", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      }
    }
  }, [loading]);
  useEffect(() => {
    if (!loading) {
      if (payRes && payRes.status === 201) {
        // console.log(payRes);
        notify("Payment status changed successfully", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      }
    }
  }, [loading]);
  return [
    delivery,
    pay,
    handleDelevery,
    handlePay,
    changeDelivery,
    changePay,
    loading,
  ];
};

export default ChangeOrderStatusHook;
