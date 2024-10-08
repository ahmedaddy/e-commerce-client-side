import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotifaction";

import avatar from "../../images/avatar.png";
import {
  createCategory,
  getAllCategory,
} from "../../redux/actions/categoryAction";

const AddCategoryHook = () => {
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
    if (name === "" || setSelectedFile === null) {
      notify("Please enter data", "warn");
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectefFile);
    console.log(formData);
    setLoading(true);

    await dispatch(createCategory(formData));

    setLoading(false);
  };
  // console.log(img);
  const res = useSelector((state) => state.allCategory.createCategory);

  // console.log(res);
  useEffect(() => {
    if (!loading) {
      setImg(avatar);
      setName("");
      setSelectedFile(null);
      setLoading(true);

      if (res) {
        // console.log(res);
        if (res.status === 201) {
          notify("The addition process was completed successfully.", "success");
        } else {
          notify("There is a problem with the addition process.", "error");
        }
      }
    }
  }, [loading]);

  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCategory());
    };
    get();
  }, []);

  const categoryRes = useSelector((state) => state.allCategory.category);
  const categories = categoryRes?.data;

  // console.log(img);
  // console.log(name);
  return [img, name, onChangeImage, onChangeName, handleSubmit, categories];
};

export default AddCategoryHook;
