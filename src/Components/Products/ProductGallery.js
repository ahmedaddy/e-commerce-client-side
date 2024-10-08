import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import mobile from "../../images/mobile.png";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import { productURL } from "../../Api/baseURL";
const ProductGallery = ({ images }) => {
  const updatedImages = images.map((item) => {
    return { original: productURL + item.original };
  });
  // console.log(images);
  // console.log(updatedImages);
  return (
    <div
      className="product-gallary-card d-flex justfiy-content-center  align-items-center
        pt-2"
    >
      <ImageGallery
        items={updatedImages}
        defaultImage={mobile}
        showFullscreenButton={false}
        isRTL={true}
        showPlayButton={false}
        showThumbnails={false}
        renderRightNav={RightButton}
        renderLeftNav={LeftButton}
      />
    </div>
  );
};

export default ProductGallery;
