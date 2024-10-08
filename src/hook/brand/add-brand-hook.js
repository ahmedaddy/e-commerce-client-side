import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotifaction";

import avatar from "../../images/avatar.png";
import { createBrand, getAllBrands } from "../../redux/actions/brandAction";

const AddBrandHook = () => {
  const dispatch = useDispatch();
  const [img, setImg] = useState(avatar);
  const [name, setName] = useState("");
  const [selectefFile, setSelectedFile] = useState(null);

  const [loading, setLoading] = useState(true);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || img === null) {
      notify("من فضلك أدخل البيانات", "warn");
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectefFile);

    setLoading(true);

    await dispatch(createBrand(formData));

    setLoading(false);
  };
  // console.log(img);
  const res = useSelector((state) => state.allBrands.createBrand);

  useEffect(() => {
    if (!loading) {
      setImg(avatar);
      setName("");
      setSelectedFile(null);
      setLoading(true);

      if (res) {
        if (res.status === 201) {
          notify("تمت عملية الاضافة بنجاح", "success");
        } else {
          notify("هناك مشكله فى عملية الاضافة", "error");
        }
        // console.log(res);
      }
    }
  }, [loading]);
  // console.log(img);
  // console.log(name);
  useEffect(() => {
    const get = async () => {
      await dispatch(getAllBrands());
    };
    get();
  }, []);

  const brandRes = useSelector((state) => state.allBrands.brand);
  const brands = brandRes?.data;

  return [img, name, onChangeImage, onChangeName, handleSubmit, brands];
};

export default AddBrandHook;
