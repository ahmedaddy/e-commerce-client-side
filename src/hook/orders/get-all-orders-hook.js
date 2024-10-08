import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllOrders } from "../../redux/actions/ordersActions";

const GetAllOrdersHook = (limit, page) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const get = async () => {
    setLoading(true);
    await dispatch(getAllOrders(5, ""));
    setLoading(false);
  };
  useEffect(() => {
    get();
  }, [limit, page]);

  const res = useSelector((state) => state.orderReducer.orders);
  const data = res?.data;
  const results = res?.results || 0;
  const pagination = res?.paginationResult?.currentPage;
  return [data, results, pagination];
};

export default GetAllOrdersHook;
