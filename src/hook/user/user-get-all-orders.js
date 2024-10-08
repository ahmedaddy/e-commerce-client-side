import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotifaction";
import { getAllOrders } from "../../redux/actions/ordersActions";

export default function UserGetAllOrders() {
  const dispatch = useDispatch();
  // useEffect(() => {}, [dispatch]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [results, setResult] = useState(0);
  const [paginate, setPaginate] = useState({});

  const user = JSON.parse(localStorage.getItem("user"));
  let userName = "";
  if (user != null) userName = user.username;

  const get = async () => {
    setLoading(true);
    await dispatch(getAllOrders(5, ""));
    setLoading(false);
  };
  useEffect(() => {
    get();
  }, [dispatch]);

  const onPress = async (page) => {
    setLoading(true);
    await dispatch(getAllOrders(5, page));
    setLoading(false);
  };

  const res = useSelector((state) => state.orderReducer.orders);
  useEffect(() => {
    if (!loading) {
      if (res) {
        // console.log(res);
        if (res.data) setData(res.data);
        if (res.results) setResult(res.results);
        if (res.paginationResult) setPaginate(res.paginationResult);
      }
    }
  }, [loading]);
  // const data = res.data;
  // console.log(data);
  return [userName, data, onPress];
}
