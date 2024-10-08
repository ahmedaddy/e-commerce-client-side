import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword } from "../../redux/actions/authAction";
import notify from "../useNotifaction";

const VerifyPasswordHook = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  const OnChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onSubmit = async () => {
    if (email == "") {
      notify("من فضلك ادخل الايميل", "error");
      return;
    }
    setLoading(true);
    localStorage.setItem("user-email", email);
    await dispatch(forgetPassword({ email }));
    setLoading(false);
  };

  const res = useSelector((state) => state.authReducer.forgetPassword);

  useEffect(() => {
    if (!loading) {
      if (res) {
        console.log(res);
        if (res.status === "success") {
          notify("تم ارسال الكود للايميل بنجاح", "success");
          setTimeout(() => {
            window.location.href = "/user/verify-code";
          }, 1000);
        }
        if (res.status === "fail") {
          notify("هذا الحساب غير موجود لدينا", "error");
        }
      }
    }
  }, [loading, res]);

  return [OnChangeEmail, email, onSubmit];
};
export default VerifyPasswordHook;
