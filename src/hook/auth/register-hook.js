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
      notify("من فضلك ادخل اسم المستخدم", "error");
      return;
    }
    if (phone.length < 10) {
      notify("من فضلك ادخل رقم هاتف صحيح", "error");
      return;
    }
    if (email === "") {
      notify("من فضلك تاكيد الايمايل", "error");
      return;
    }
    if (password !== confirmPassword || password === "") {
      notify("من فضلك تاكيد من كلمه السر", "error");
      return;
    }
    if (password.length < 6) {
      notify("يجب ان لاتقل كلمه السر عن 6 احرف او ارقام", "error");
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
    notify("hello");
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
          notify("تم تسجيل الحساب بنجاح", "success");
          setTimeout(() => {
            window.location.href = "/";
          }, 2000);
        }

        if (res.data && res.data.errors) {
          if (res.data.errors[0].msg === "E-mail already used")
            notify("هذا الايميل مسجل من قبل", "error");
        }
        if (res.data.errors) {
          if (res.data.errors[0].msg === "accept only morrocan phone numbers")
            notify("يجب ان يكون الرقم مغربي مكون من 10 رقم", "error");
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
