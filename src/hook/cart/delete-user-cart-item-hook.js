import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartItems,
  deleteUserCartItem,
  updateItemQuantity,
} from "../../redux/actions/cartAction";
import notify from "../useNotifaction";

const DeleteUserCartItem = (item) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [quantity, setQuantity] = useState(false);

  const onChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };
  const deleteCartItem = async () => {
    setLoading(true);
    await dispatch(deleteUserCartItem(item._id));
    setLoading(false);
  };

  const res = useSelector((state) => state.cartReducer.deleteCartItem);
  // console.log(res);

  useEffect(() => {
    if (loading === false) {
      if (res.status === "success") {
        notify("تم الحذف بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else {
      }
    }
  }, [loading]);

  const clearCart = async () => {
    setLoading(true);
    await dispatch(deleteCartItems());
    setLoading(false);
    setTimeout(() => {
      window.location.reload(false);
    }, 1000);
  };

  const handleUpdateQuantity = async () => {
    await dispatch(
      updateItemQuantity(item._id, {
        quantity: quantity,
      })
    );
    notify("لقد تم تغيير كمية منتجك بنجاح", "success");
    setTimeout(() => {
      window.location.reload(false);
    }, 1000);
  };

  return [
    loading,
    deleteCartItem,
    clearCart,
    quantity,
    onChangeQuantity,
    handleUpdateQuantity,
  ];
};

export default DeleteUserCartItem;
