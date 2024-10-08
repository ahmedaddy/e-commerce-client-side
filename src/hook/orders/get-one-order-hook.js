import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOneOrder } from "../../redux/actions/ordersActions";

const GetOneOrderHook = (id) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const get = async () => {
    setLoading(true);
    await dispatch(getOneOrder(id));
    setLoading(false);
  };
  useEffect(() => {
    get();
  }, [id]);
  const res = useSelector((state) => state.orderReducer.oneOrder);

  useEffect(() => {
    if (!loading) {
      if (res) {
        setOrderData(res.data);
        setCartItems(res.data?.cartItems);
      } else {
        setOrderData([]);
        setCartItems([]);
      }
    }
  }, [loading]);
  // console.log(res);
  return [orderData, cartItems, loading];
};

export default GetOneOrderHook;
