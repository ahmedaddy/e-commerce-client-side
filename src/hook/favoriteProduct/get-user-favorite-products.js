import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWichList } from "../../redux/actions/wishListAction";
const GetUserFavoriteProducts = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [itemsCount, setItemsCount] = useState([]);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getWichList());
      setLoading(false);
    };
    get();
  }, []);

  const res = useSelector((state) => state.wishList.allWishlist);

  useEffect(() => {
    if (!loading) {
      if (res && res.data) {
        setItemsCount(res.results);
        setItems(res.data);
      }
    }
  }, [loading]);
  return [items, itemsCount];
};

export default GetUserFavoriteProducts;
