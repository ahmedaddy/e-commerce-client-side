import { useSelector, useDispatch } from "react-redux";
import { getUserCart } from "../../redux/actions/cartAction";
import { useEffect, useState } from "react";
const AllCartHook = () => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const [numberOfCartItems, setNumberOfCartItems] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [couponName, setCouponName] = useState("");
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [totalCartPriceAfterDiscount, setTotalCartPriceAfterDiscount] =
    useState(0);
  const [product, setProduct] = useState({});
  const [cartId, setCartId] = useState("0");

  useEffect(() => {
    const get = async () => {
      setloading(true);
      await dispatch(getUserCart(8));
      setloading(false);
    };
    get();
  }, []);

  const res = useSelector((state) => state.cartReducer.userCart);
  // console.log(res);
  useEffect(() => {
    if (!loading) {
      if (res && res.status === "success") {
        // console.log(res);
        setCartId(res.data._id);
        setCartItems(res.data.cartItems);
        setNumberOfCartItems(res.numberOfCartItems);
        setTotalCartPrice(res.data.totalCartPrice);
        if (res.data.coupon) {
          setCouponName(res.data.coupon);
        } else {
          setCouponName("");
        }
        if (res.data.totalPriceAfterDiscount) {
          setTotalCartPriceAfterDiscount(res.data.totalPriceAfterDiscount);
        } else {
          setTotalCartPriceAfterDiscount("");
        }
      }
    }
  }, [loading, res]);

  return [
    loading,
    numberOfCartItems,
    couponName,
    cartItems,
    totalCartPrice,
    totalCartPriceAfterDiscount,
    cartId,
  ];
};

export default AllCartHook;
