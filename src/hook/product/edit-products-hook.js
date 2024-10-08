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
import {
  getOneProduct,
  updateProduct,
} from "../../redux/actions/productAction";
import notify from "../useNotifaction";

const EditProductsHook = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(getOneProduct(id));
      await dispatch(getAllBrands());
      await dispatch(getAllCategory());
      setLoading(false);
    };
    fetchData();
  }, [dispatch, id]);

  const category = useSelector((state) => state.allCategory.category);
  const brand = useSelector((state) => state.allBrands.brand);
  const subcategory = useSelector((state) => state.subCategory.subCategory);
  const product = useSelector((state) => state.allProducts.oneProduct);
  // console.log(product);
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

  const [selectedSubCatOptions, setSelectedSubCatOptions] = useState([]);

  //to convert base 64 to file
  const isBase64 = (str) => {
    const base64regex = /^data:image\/[a-zA-Z]+;base64,/;
    return base64regex.test(str);
  };
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

  //convert url to file
  const convertURLtoFile = async (url) => {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.blob();
    const ext = url.split(".").pop();
    const filename = url.split("/").pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], Math.random(), metadata);
  };
  // const processImages = async (images) => {
  //   // Convert images to File objects
  //   const imgs = await Promise.all(
  //     product.data.images.map(async (img) => {
  //       if (img.length <= 1000) {
  //         return await convertURLtoFile(img);
  //       } else {
  //         return dataURLtoFile(img, Math.random() + ".png");
  //       }
  //     })
  //   );

  //   // Convert File objects to URLs
  //   const imgUrls = imgs.map((file) => {
  //     return URL.createObjectURL(file);
  //   });
  //   console.log(imgUrls);
  //   return imgUrls;
  // };

  useEffect(() => {
    if (product && product.data) {
      if (product.data.category && product.data.category._id) {
        setCatId(product.data.category._id);
      }
      if (product.data.brand && product.data.brand._id) {
        setBrandId(product.data.brand._id);
      }
      setSelectedSubId(product.data.subCategories);
      setImages(product.data.images);
      setTitle(product.data.title);
      setDescription(product.data.description);
      setPrice(product.data.price);
      setPriceAfterDiscount(product.data.priceAfterDescount);
      setQty(product.data.quantity);
    }
  }, [product]);

  useEffect(() => {
    if (catId != 0) {
      const run = async () => {
        await dispatch(getSubCategoryOnCategory(catId));
      };
      run();
    }
  }, [catId]);

  useEffect(() => {
    if (subcategory?.data) {
      const subCategoryArray = subcategory.data.map((item) => item.name);

      setSelectedSubCatOptions(subCategoryArray);
      setSubCatOptions(subcategory.data);
    }
  }, [subcategory]);
  console.log(selectedSubCatOptions);

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

  const removeColor = (color) => {
    const newColor = colors.filter((e) => e !== color);
    setColors(newColor);
  };

  const onSelect = (selectedList) => {
    setSelectedSubId(selectedList);
  };
  const onRemove = (selectedList) => {
    setSelectedSubId(selectedList);
  };

  const onSeletCategory = async (e) => {
    if (e.target.value !== 0) {
      await dispatch(getSubCategoryOnCategory(e.target.value));
    }
    setCatId(e.target.value);
  };

  const onSelectBrand = (e) => {
    setBrandId(e.target.value);
  };

  const objectValuesToArray = (obj) => {
    return Object.values(obj);
  };

  const processImages = async (images) => {
    if (typeof images !== "object") {
      throw new TypeError("images should be an object");
    }

    const imageArray = objectValuesToArray(images);

    let imageCover;
    if (isBase64(imageArray[0])) {
      imageCover = dataURLtoFile(imageArray[0], Math.random() + ".png");
    } else {
      imageCover = await convertURLtoFile(imageArray[0]);
    }

    let itemImages = [];
    await Promise.all(
      imageArray.map(async (image) => {
        if (isBase64(image)) {
          itemImages.push(dataURLtoFile(image, Math.random() + ".png"));
        } else {
          const file = await convertURLtoFile(image);
          itemImages.push(file);
        }
      })
    );

    return { imageCover, itemImages };
  };

  //  on submit =============================================================>
  const onSubmit = async (e) => {
    e.preventDefault();

    if (
      title === "" ||
      description === "" ||
      catId === "" ||
      images.length <= 0 ||
      price === "السعر قبل الخصم" ||
      price <= 0 ||
      brandId === ""
    ) {
      notify("Complete entering all information.", "warn");
      return;
    }

    // let imgCover;
    // if (images[0].length <= 1000) {
    //   convertURLtoFile(images[0]).then((val) => (imgCover = val));
    // } else {
    //   imgCover = dataURLtoFile(images[0], Math.random() + ".png");
    // }

    // let itemImages = [];
    // //convert array of base 64 image to file
    // Array.from(Array(Object.keys(images).length).keys()).map((item, index) => {
    //   if (images[index].length <= 1000) {
    //     convertURLtoFile(images[index]).then((val) => itemImages.push(val));
    //   } else {
    //     itemImages.push(dataURLtoFile(images[index], Math.random() + ".png"));
    //   }
    // });

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", parseFloat(price).toFixed(2));
    formData.append(
      "priceAfterDescount",
      parseFloat(priceAfterDiscount).toFixed(2)
    );
    formData.append("quantity", parseInt(qty));
    formData.append("category", catId);
    formData.append("brand", brandId);
    // setTimeout(() => {
    //   formData.append("imageCover", imgCover);
    //   itemImages.map((item) => formData.append("images", item));
    // }, 1000);
    // setTimeout(() => {
    //   console.log(imgCover);
    //   console.log(itemImages);
    // }, 1000);

    colors.forEach((item) => {
      formData.append("colors", item);
    });

    const subCatArray = selectedSubId.map((item) => item._id);
    subCatArray.forEach((item) => {
      formData.append("subCategories[]", item);
    });

    // console.log(images);
    // const { imageCover, itemImages } = await processImages(images);
    // console.log(itemImages);

    // if (imageCover) {
    //   formData.append("imageCover", imageCover);
    // }
    // if (Array.isArray(itemImages) && itemImages.length > 0) {
    //   itemImages.forEach((item) => {
    //     formData.append("images", item);
    //   });
    // }

    // for (const pair of formData.entries()) {
    //   console.log(`${pair[0]}: ${pair[1]}`);
    // }

    setLoading(true);
    await dispatch(updateProduct(id, formData));
    setLoading(false);
    // } catch (error) {
    //   console.error("Error converting images: ", error);
    //   notify("حدث خطأ أثناء معالجة الصور", "error");
    // }
  };

  const productRes = useSelector((state) => state.allProducts.updateProduct);

  // console.log(product);
  // console.log(productRes);
  useEffect(() => {
    if (!loading) {
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

      if (productRes && productRes.status === 200) {
        notify("Modified successfully", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else {
        notify("There is a problem", "error");
        // setTimeout(() => {
        //   window.location.reload(false);
        // }, 1000);
        console.log(productRes);
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
    selectedSubCatOptions,
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
    onSelectBrand,
    onChangeColor,
    showColor,
    colors,
    onSubmit,
    subCatOptions,
    removeColor,
  ];
};

export default EditProductsHook;
