import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../redux/actions/reviewAction";
import notify from "../useNotifaction";

const AddReviewHook = (id) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [rateValue, setRateValue] = useState(0);
  const [loading, setLoading] = useState(true);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeRateValue = (newValue) => {
    setRateValue(newValue);
  };

  var user = "";
  if (localStorage.getItem("user") != null) {
    user = JSON.parse(localStorage.getItem("user"))._id;
  }

  const onSubmit = async () => {
    if (rateValue < 1) {
      notify("Please add a rating.", "warn");
      return;
    }
    if (title === "") {
      notify("Please write a comment", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      createReview({
        title,
        ratings: rateValue,
        product: id,
        user,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.allReview.createReview);

  useEffect(() => {
    if (!loading) {
      if (res) {
        // console.log(res);
        if (res.status && res.status === 403) {
          notify("Admin is not allowed to rate.", "warn");
        }
        if (
          res.data &&
          res.data.errors &&
          res.data.errors[0].msg === "you Already Created a review before"
        ) {
          notify("you Already Created a review before", "error");
          setTimeout(() => {
            window.location.reload(false);
          }, 1000);
        }
        if (res.data && res.data.title) {
          notify("The rating has been added successfully.", "success");
          setTimeout(() => {
            window.location.reload(false);
          }, 1000);
        }
      }
    }
  }, [loading]);

  return [onChangeTitle, onChangeRateValue, title, rateValue, user, onSubmit];
};

export default AddReviewHook;
