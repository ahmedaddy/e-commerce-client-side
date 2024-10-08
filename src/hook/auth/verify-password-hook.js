import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyPassword } from "../../redux/actions/authAction";
import notify from "../useNotifaction";

const VerifyPasswordHook = () => {
  const dispatch = useDispatch();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const OnChangeCode = (e) => {
    setCode(e.target.value);
  };

  const onSubmit = async () => {
    if (code === "") {
      notify("Please enter the code", "error");
      return;
    }
    setLoading(true);
    await dispatch(verifyPassword({ resetCode: code }));
    setLoading(false);
  };

  const res = useSelector((state) => state.authReducer.verifyPassword);

  // console.log(res);
  useEffect(() => {
    if (!loading) {
      if (res) {
        if (res.status === "success") {
          notify("Activation code is correct", "success");
          setTimeout(() => {
            window.location.href = "/user/reset-password";
          }, 1500);
        }
        if (res.data && res.data.status === "fail") {
          notify("The code is invalid or expired.", "error");
        }
      }
    }
  }, [loading, res]);
  return [code, OnChangeCode, onSubmit];
};
export default VerifyPasswordHook;
