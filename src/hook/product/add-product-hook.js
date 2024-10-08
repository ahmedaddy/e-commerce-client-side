import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrands } from "../../redux/actions/brandAction";
import {
  getAllCategory,
  getOneCategory,
} from "../../redux/actions/categoryAction";
import {
  getSubCategory,
  getSubCategoryOnCategory,
} from "../../redux/actions/subCategoryAction";

import notify from "../useNotifaction";
import { createProduct } from "../../redux/actions/productAction";

const AddProductHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrands());
    dispatch(getAllCategory());
  }, [dispatch]);

  const category = useSelector((state) => state.allCategory.category);
  const brand = useSelector((state) => state.allBrands.brand);
  const subcategory = useSelector((state) => state.subCategory.subCategory);

  // console.log(category);
  // console.log(brand);

  const [subCatOptions, setSubCatOptions] = useState([]);

  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("السعر قبل الخصم");
  const [priceAfterDiscount, setPriceAfterDiscount] =
    useState("السعر بعد الخصم");
  const [catId, setCatId] = useState("");
  const [qty, setQty] = useState("");
  const [brandId, setBrandId] = useState("");
  const [selectedSubId, setSelectedSubId] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subCat, setSubCat] = useState([]);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const onChangePriceAfterDiscount = (e) => {
    setPriceAfterDiscount(e.target.value);
  };
  const onChangeQuantity = (e) => {
    setQty(e.target.value);
  };
  const onChangeColor = () => {
    setShowColor(!showColor);
  };
  const onChangeImages = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  //to show hide color picker
  const [showColor, setShowColor] = useState(false);
  //to store all pick color
  const [colors, setColors] = useState([]);

  const handelChangeComplete = (color) => {
    setColors([...colors, color.hex]);
    setShowColor(!showColor);
  };

  const onSelect = (selectedList) => {
    setSelectedSubId(selectedList);
  };
  const onRemove = (selectedList) => {
    setSelectedSubId(selectedList);
  };
  // console.log([title, description, price, priceAfterDiscount]);

  //when selet category store id
  const onSeletCategory = async (e) => {
    if (e.target.value !== 0) {
      await dispatch(getSubCategoryOnCategory(e.target.value));
    }
    setCatId(e.target.value);
  };

  useEffect(() => {
    if (catId !== 0) {
      if (subcategory.data) {
        setSubCatOptions(subcategory.data);
      } else {
        setSubCatOptions([]);
      }
    }
  }, [catId]);

  //when selet brand store id
  const onSeletBrand = (e) => {
    setBrandId(e.target.value);
  };
  const removeColor = (color) => {
    const newColor = colors.filter((e) => e !== color);
    setColors(newColor);
  };

  //to convert base 64 to file
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      title === "" ||
      description === "" ||
      catId === "" ||
      images.length <= 0 ||
      price === "السعر قبل الخصم" ||
      price <= 0 ||
      images.length <= 0 ||
      brandId === ""
    ) {
      notify("Complete entering all information.", "warn");
      return;
    }
    if (title.length < 3) {
      notify("Title must contain at least 3 characters.", "warn");
      return;
    }
    if (description.length < 20) {
      notify("Description must contain at least 20 characters.", "warn");
      return;
    }
    if (colors.length === 1) {
      notify("You should add more than one color.", "warn");
      return;
    }
    // console.log(images[0].file);
    const imageCover = images[0].file;

    // const itemImages = images.map((item, index) => {
    //   return dataURLtoFile(images[index], Math.random() + ".png");
    // });

    const itemImages = images.map((item, index) => {
      return images[index].file;
    });
    // console.log(imageCover);
    // console.log(itemImages);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", parseFloat(price).toFixed(2)); // Convert price to number and format if necessary
    formData.append(
      "priceAfterDescount",
      parseFloat(priceAfterDiscount).toFixed(2)
    ); // Convert to number and format
    formData.append("quantity", parseInt(qty));
    formData.append("category", catId);
    formData.append("brand", brandId);

    if (Array.isArray(images) && images.length > 0) {
      formData.append("imageCover", imageCover);
      // Append itemImages individually
      itemImages.forEach((item, index) => {
        // console.log(item);
        formData.append("images", item);
      });
    }

    // Append colors as strings or ensure they are correctly formatted
    colors.forEach((item, index) => {
      formData.append("colors", item);
    });

    // Append subCategories as JSON strings if needed

    const subCatArray = selectedSubId.map((item) => item._id);
    // console.log(subCatArray);

    subCatArray.forEach((item) => {
      formData.append("subCategories[]", item);
    });
    // selectedSubId.forEach((item) => {
    //   formData.append("subCategories", item._id);
    // });
    // formData.append("subCategories", subCat);

    // for (const pair of formData.entries()) {
    //   console.log(`${pair[0]}: ${pair[1]}`);
    // }

    setLoading(true);
    await dispatch(createProduct(formData));
    setLoading(false);
  };

  const res = useSelector((state) => state.allProducts.product);

  // console.log(res);

  useEffect(() => {
    if (!loading) {
      if (res) {
        setSubCatOptions([]);
        setImages([]);
        setTitle("");
        setDescription("");
        setPrice("السعر قبل الخصم");
        setPriceAfterDiscount("السعر بعد الخصم");
        setCatId("");
        setQty("");
        setBrandId("");
        setSelectedSubId([]);
        dispatch(getAllBrands(50));
        dispatch(getAllCategory(50));
        setTimeout(() => {
          setLoading(true);
        }, 2000);

        if (res.status === 201) {
          notify("Added successfully", "success");
          setTimeout(() => {
            window.location.reload(false);
          }, 1000);
        } else {
          notify("There is a problem", "error");
        }
      }
    }
  }, [loading]);

  return [
    category,
    brand,
    images,
    setImages,
    onChangeImages,
    title,
    description,
    price,
    priceAfterDiscount,
    catId,
    qty,
    brandId,
    selectedSubId,
    loading,
    onChangeTitle,
    onChangeDescription,
    onChangePrice,
    onChangePriceAfterDiscount,
    onChangeQuantity,
    handelChangeComplete,
    onSelect,
    onRemove,
    onSeletCategory,
    subCatOptions,
    onSeletBrand,
    onChangeColor,
    showColor,
    colors,
    onSubmit,
  ];
};

export default AddProductHook;
