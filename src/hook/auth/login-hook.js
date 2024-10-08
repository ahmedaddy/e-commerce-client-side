import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/authAction";
import notify from "../useNotifaction";

const LoginHook = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async () => {
    setIsPress(true);
    setLoading(true);
    await dispatch(login({ email, password }));
    setIsPress(false);
    setLoading(false);
  };

  const res = useSelector((state) => state.authReducer.login);

  // console.log(res);
  // console.log(email);
  // console.log(password);

  useEffect(() => {
    if (!loading && res) {
      // console.log(res);
      if (res.token) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.data));
        notify("You have successfully logged in.", "success");
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }

      if (res.data.message === "incorrect email & password") {
        console.log(res.data.message);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        notify("Incorrect password or email", "error");
      }
      setLoading(true);
    }
  }, [loading]);

  return [
    onChangeEmail,
    onChangePassword,
    email,
    password,
    loading,
    onSubmit,
    isPress,
  ];
};

export default LoginHook;
