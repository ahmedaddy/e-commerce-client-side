import { useSelector, useDispatch } from "react-redux";
import {
  getAllBrands,
  getAllBrandsPage,
} from "../../redux/actions/brandAction";
import { useEffect } from "react";

const AllBrandHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const get = async () => {
      await dispatch(getAllBrands(8));
    };
    get();
  }, []);

  // get state from redux
  const brand = useSelector((state) => state.allBrands.brand);
  const loading = useSelector((state) => state.allBrands.loading);

  // get page count
  let pageCount = 0;
  try {
    if (brand.paginationResult) {
      pageCount = brand.paginationResult.numberOfPages;
    }
  } catch (e) {}

  // on prees pagination
  const getPage = (page) => {
    dispatch(getAllBrandsPage(page));
  };

  return [loading, brand, pageCount, getPage];
};

export default AllBrandHook;
