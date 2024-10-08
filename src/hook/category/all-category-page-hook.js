import { useSelector, useDispatch } from "react-redux";
import {
  getAllCategory,
  getAllCategoryPage,
} from "../../redux/actions/categoryAction";
import { useEffect } from "react";
const AllCategoryHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCategory(8));
    };
    get();
  }, []);

  // get state from redux
  const loading = useSelector((state) => state.allCategory.loading);
  const category = useSelector((state) => state.allCategory.category);

  // get page count
  let pageCount = 0;
  try {
    if (category.paginationResult) {
      pageCount = category.paginationResult.numberOfPages;
    }
  } catch (e) {}

  // on prees pagination
  const getPage = (page) => {
    dispatch(getAllCategoryPage(page));
  };

  return [loading, category, pageCount, getPage];
};

export default AllCategoryHook;
