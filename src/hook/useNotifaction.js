import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const notify = (msg, type) => {
  if (type === "warn") toast.warn(msg);
  else if (type === "success") toast.success(msg);
  else if (type === "error") toast.error(msg);
};

export default notify;
