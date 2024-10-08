import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBrand } from "../../redux/actions/brandAction";

export default function BrandCardHook(brand) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleOpen = () => {
    setShow(true);
  };
  const handelDelete = async () => {
    setLoading(true);
    await dispatch(deleteBrand(brand._id));
    setLoading(false);
    setShow(false);
    window.location.reload(false);
  };

  return [show, handleClose, handleOpen, handelDelete, loading];
}
