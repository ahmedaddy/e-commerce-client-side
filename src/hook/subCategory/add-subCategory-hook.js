import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import notify from "../useNotifaction";
import { createSubCategory } from "../../redux/actions/subCategoryAction";

const AddSubCategoryHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!navigator.onLine) {
      notify("هناك مشكله فى الاتصال بالانترنت", "warn");
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
      notify("هناك مشكله فى الاتصال بالانترنت", "warn");
      return;
    }
    if (name === "") {
      notify("من فضلك ادخل اسم التصنيف", "warn");
      return;
    }
    if (id === "0") {
      notify("من فضلك اختر تصنيف رئيسي", "warn");
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
          notify("تم إنشاء التصنيف الفرعي بنجاح", "success");
        }
        if (
          subcategory ===
          "error AxiosError: Request failed with status code 500"
        ) {
          notify("هذا الاسم مكرر من فضلك اختر اسم اخر", "warn");
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
