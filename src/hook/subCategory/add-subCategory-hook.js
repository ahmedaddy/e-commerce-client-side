import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import notify from "../useNotifaction";
import { createSubCategory } from "../../redux/actions/subCategoryAction";

const AddSubCategoryHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!navigator.onLine) {
      notify("There is a problem with the internet connection.", "warn");
      return;
    }
    dispatch(getAllCategory());
  }, []);

  const [id, setID] = useState("0");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const category = useSelector((state) => state.allCategory.category);
  const subcategory = useSelector((state) => state.subCategory.subCategory);
  const handleIdChange = (e) => {
    setID(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!navigator.onLine) {
      notify("There is a problem with the internet connection.", "warn");
      return;
    }
    if (name === "") {
      notify("Please enter the category name.", "warn");
      return;
    }
    if (id === "0") {
      notify("Please select a main category.", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      createSubCategory({
        name: name,
        category: id,
      })
    );
    setLoading(false);
  };
  // console.log(subcategory);

  useEffect(() => {
    if (!loading) {
      if (subcategory) {
        setID("0");
        setName("");
        if (subcategory.data) {
          notify("Subcategory created successfully", "success");
        }
        if (
          subcategory ===
          "error AxiosError: Request failed with status code 500"
        ) {
          notify("This name is duplicate, please choose another name", "warn");
        }
        setLoading(true);
      }
    }
  }, [loading]);

  return [
    id,
    name,
    loading,
    category,
    handleIdChange,
    handleNameChange,
    handleSubmit,
  ];
};

export default AddSubCategoryHook;
