import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../redux/actions/cartAction";
import notify from "../useNotifaction";

const AddCartHook = (id, item) => {
  const dispatch = useDispatch();
  const [color, setColor] = useState("");
  const [indexColor, setIndexColor] = useState("");
  const [loading, setLoading] = useState(true);

  const choseColor = (color, index) => {
    setColor(color);
    setIndexColor(index);
  };

  const addToCart = async () => {
    if (item.colors.length > 0) {
      if (color === "") {
        notify("Please select a color first for the product.", "warn");
        return;
      }
    }

    setLoading(true);
    await dispatch(
      addProductToCart({
        productId: id,
        color: color,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.cartReducer.addToCart);

  // console.log(color);
  // console.log(res);

  useEffect(() => {
    if (loading === false) {
      if (res && res.message === "product added successfully") {
        notify(
          "The product has been successfully added to the cart.",
          "success"
        );
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      }
      if (res.status === 400) {
        notify("The product is in the cart", "warn");
      }
      if (res && res.status === 500) {
        notify("Log in first", "warn");
      }
    }
  }, [loading, res]);

  return [indexColor, choseColor, addToCart];
};

export default AddCartHook;
