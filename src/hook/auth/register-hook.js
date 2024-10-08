import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../redux/actions/authAction";
import notify from "../useNotifaction";

const RegisterHook = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validationValues = () => {
    if (name === "") {
      notify("Please enter your username.", "error");
      return;
    }
    if (phone.length < 10) {
      notify("Please enter a valid phone number.", "error");
      return;
    }
    if (email === "") {
      notify("Please confirm your email.", "error");
      return;
    }
    if (password !== confirmPassword || password === "") {
      notify("Please confirm your password.", "error");
      return;
    }
    if (password.length < 6) {
      notify(
        "The password must not be less than 6 letters or numbers.",
        "error"
      );
      return;
    }
    return true;
  };

  // console.log("name", name);
  // console.log("email", email);
  // console.log("password", password);
  // console.log("passwordConfirm", confirmPassword);
  // console.log("phone", phone);

  const onSubmit = async () => {
    validationValues();
    setLoading(true);
    await dispatch(
      signUp({ name, email, password, passwordConfirm: confirmPassword, phone })
    );
    setLoading(false);
    notify("Hello");
  };

  const res = useSelector((state) => state.authReducer.register);

  // console.log(res);

  useEffect(() => {
    if (loading === false) {
      if (res) {
        // console.log(res);
        if (res.token) {
          localStorage.setItem("token", res.token);
          localStorage.setItem("user", JSON.stringify(res.data));
          notify("Account registered successfully", "success");
          setTimeout(() => {
            window.location.href = "/";
          }, 2000);
        }

        if (res.data && res.data.errors) {
          if (res.data.errors[0].msg === "E-mail already used")
            notify("This email is already registered.", "error");
        }
        if (res.data.errors) {
          if (res.data.errors[0].msg === "accept only morrocan phone numbers")
            notify(
              "The number must be Moroccan, consisting of 10 digits.",
              "error"
            );
        }
      }
    }
  }, [loading]);

  return [
    onChangeName,
    onChangePhone,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPassword,
    name,
    phone,
    email,
    password,
    confirmPassword,
    onSubmit,
  ];
};

export default RegisterHook;
