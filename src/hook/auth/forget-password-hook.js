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
      notify("Please enter your email", "error");
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
          notify(
            "The code has been sent to your email successfully.",
            "success"
          );
          setTimeout(() => {
            window.location.href = "/user/verify-code";
          }, 1000);
        }
        if (res.status === "fail") {
          notify("This account does not exist with us", "error");
        }
      }
    }
  }, [loading, res]);

  return [OnChangeEmail, email, onSubmit];
};
export default VerifyPasswordHook;
