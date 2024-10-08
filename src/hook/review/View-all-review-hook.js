import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneReviewOnSpecificProd } from "../../redux/actions/reviewAction";

const ViewAllReviewHook = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneReviewOnSpecificProd(id, 1, 5));
  }, []);

  const allReviews = useSelector((state) => state.allReview.allReviewProduct);

  const onPress = async (page) => {
    await dispatch(getOneReviewOnSpecificProd(id, page, 5));
  };

  return [allReviews, onPress];
};

export default ViewAllReviewHook;
