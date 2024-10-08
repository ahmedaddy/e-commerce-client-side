import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWichList } from "../../redux/actions/wishListAction";

const CardContainerHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [favProd, setFavProd] = useState([]);

  const res = useSelector((state) => state.wishList.allWishlist);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getWichList());
      setLoading(false);
    };

    get();
  }, []);

  // console.log(res);

  useEffect(() => {
    if (!loading) {
      if (res && res.data && res.data?.length > 0) {
        setFavProd(res.data.map((item) => item._id));
      } else {
        setFavProd([]);
      }
      if (res && res === undefined) {
        setFavProd([]);
        // console.log(res);
      }
    }
  }, [loading]);

  return [favProd];
};

export default CardContainerHook;
