import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserPassword } from "../../redux/actions/authAction";
import notify from "../useNotifaction";
const ChangeUserPasswordHook = () => {
  const dispatch = useDispatch();

  const res = useSelector((state) => state.authReducer.userChangedPassword);

  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangeِCurrentPassword = (event) => {
    event.persist();
    setCurrentPassword(event.target.value);
  };

  const onChangePassword = (event) => {
    event.persist();
    setPassword(event.target.value);
  };
  const onChangeConfirmPassword = (event) => {
    event.persist();
    setConfirmPassword(event.target.value);
  };

  const changePassword = async () => {
    if (currentPassword === "") {
      notify("Please enter your old password.", "warn");
      return;
    }
    if (password === "") {
      notify("Please enter a new password.", "warn");
      return;
    }
    if (confirmPassword === "") {
      notify("Please re-enter your new password.", "warn");
      return;
    }
    if (confirmPassword != password) {
      notify("Confirm password does not match.", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      updateUserPassword({
        currentPassword: currentPassword,
        password: password,
        passwordConfirm: confirmPassword,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      if (res) {
        console.log(res);
        if (res.status && res.status === 401)
          notify("Log in again", "warn");
      }
      if (res.token) {
        notify("Password changed successfully", "success");
      }
    }
  }, [loading]);

  // console.log(res);

  return [
    currentPassword,
    password,
    confirmPassword,
    onChangeِCurrentPassword,
    onChangePassword,
    onChangeConfirmPassword,
    changePassword,
  ];
};

export default ChangeUserPasswordHook;
