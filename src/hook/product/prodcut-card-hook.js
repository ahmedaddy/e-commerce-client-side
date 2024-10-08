import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "./../../hook/useNotifaction";

// off
import { CiHeart } from "react-icons/ci";
// on
import { FaHeart } from "react-icons/fa";

import {
  createWichList,
  deleteWichList,
} from "../../redux/actions/wishListAction";

const ProdcutCardHook = (item, favProd = []) => {
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(favProd.includes(item._id));
  const [favImg, setFavImg] = useState(isFav ? FaHeart : CiHeart);
  const [loading, setLoading] = useState({ add: false, remove: false });

  const resAdd = useSelector((state) => state.wishList.createWishlist);
  const resDelete = useSelector((state) => state.wishList.deleteWishlist);

  // Update isFav and favImg states when favProd changes
  useEffect(() => {
    const isFavotite = favProd.includes(item._id);
    setIsFav(isFavotite);
    setFavImg(isFavotite ? FaHeart : CiHeart);
  }, [favProd, item._id]);
  // console.log(favImg);
  // console.log(isFav);

  const addToWishList = useCallback(async () => {
    setLoading((prev) => ({ ...prev, add: true }));
    await dispatch(createWichList({ productId: item._id }));
    setLoading((prev) => ({ ...prev, add: false }));
  }, [dispatch, item._id]);

  const deleteFromWishList = useCallback(async () => {
    setLoading((prev) => ({ ...prev, remove: true }));
    await dispatch(deleteWichList(item._id));
    setLoading((prev) => ({ ...prev, remove: false }));
  }, [dispatch, item._id]);

  const handleFav = () => {
    if (isFav) {
      deleteFromWishList();
    } else {
      addToWishList();
    }
  };
  useEffect(() => {
    if (!loading.remove) {
      if (resDelete) {
        // console.log(resDelete);
        if (resDelete && resDelete.status === "success") {
          notify(
            "The product has been removed from your favorites successfully.",
            "success"
          );
          setTimeout(() => {
            window.location.reload(false);
          }, 1500);
        } else if (resAdd && resAdd.status === 500) {
          notify("You are not registered", "error");
          // setTimeout(() => {
          //   window.location.reload(false);
          // }, 1500);
        }
      }
    }
  }, [loading.remove]);

  useEffect(() => {
    if (!loading.add) {
      if (resAdd && resAdd.status === "success") {
        notify(
          "The product has been successfully added to favourites.",
          "success"
        );
        setTimeout(() => {
          window.location.reload(false);
        }, 1500);
      } else if (resAdd && resAdd.status === 500) {
        notify("You are not registered.", "error");
        // setTimeout(() => {
        //   window.location.reload(false);
        // }, 1500);
      }
    }
  }, [loading.add]);

  return [deleteFromWishList, addToWishList, handleFav, isFav, favImg];
};

export default ProdcutCardHook;
