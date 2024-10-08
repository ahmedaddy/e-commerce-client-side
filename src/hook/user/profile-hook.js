import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getLoggedUserData,
  updateUserData,
  updateUserPassword,
} from "../../redux/actions/authAction";
import notify from "../useNotifaction";

const ProfileHook = () => {
  const dispatch = useDispatch();

  let user = [];
  if (localStorage.getItem("user") !== null)
    user = JSON.parse(localStorage.getItem("user"));

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [loading, setLoading] = useState(true);

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const handelSubmit = async () => {
    let body = {
      email,
      name,
      phone,
    };

    setLoading(true);
    await dispatch(updateUserData(body));
    setLoading(false);
    setShow(false);
    //   window.location.reload(false);
  };

  const res = useSelector((state) => state.authReducer.logggedUser);

  // console.log(res);
  useEffect(() => {
    if (!loading) {
      if (res && res.data) {
        if (res.status === 200) {
          notify("تم الحديث بنجاح", "success");
          const { email, name, phone } = res.data.data;
          const userData = { username: name, phone, email };
          // console.log(userData);
          localStorage.setItem("user", JSON.stringify(userData));
          setTimeout(() => {
            window.location.reload(false);
          }, 1500);
        }
      }
      if (res.status === 400) {
        if (res.data.errors[0].msg === "E-mail already used") {
          notify("الإيمايل مستخدم من قبل", "warn");
          setTimeout(() => {
            window.location.reload(false);
          }, 1000);
          return;
        }
        notify("فشل عملية التحديث", "warn");
      }
    }
  }, [loading]);

  return [
    name,
    email,
    phone,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    loading,
    show,
    handleClose,
    handleShow,
    handelSubmit,
  ];
};
export default ProfileHook;
