import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../redux/actions/authAction";
import notify from "../useNotifaction";

const ResetPasswordHook = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const OnChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const OnChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onSubmit = async () => {
    if (password === "") {
      notify("من فضلك ادخل كلمة السر", "error");
      return;
    }
    if (password !== confirmPassword) {
      notify("كلمة السر غير متطابقه مع تاكيد كلمة السر", "error");
      return;
    }
    const email = localStorage.getItem("user-email");
    setLoading(true);
    await dispatch(
      resetPassword({
        email: email,
        newPassword: password,
      })
    );
    setLoading(false);
  };
  const res = useSelector((state) => state.authReducer.resetPassword);
  // console.log(res);

  useEffect(() => {
    if (loading === false) {
      if (res && res.data) {
        // console.log(res.data.status);
        // console.log(res.statusText);
        if (res.status && res.status === 200) {
          notify("تم تغير كلمة السر بنجاح", "success");
          localStorage.removeItem("user-email");
          setTimeout(() => {
            window.location.href = "/login";
          }, 1500);
        } else if (res.data.status === "fail") {
          notify("من فضلك اطلب كود جديد", "error");
        }
      }
    }
  }, [loading, res]);

  return [
    password,
    confirmPassword,
    OnChangePassword,
    OnChangeConfirmPassword,
    onSubmit,
  ];
};
export default ResetPasswordHook;
