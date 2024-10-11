import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrands } from "../../redux/actions/brandAction";

// Rename function to start with "use"
const useHomeBrand = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBrands(8));
  }, [dispatch]);

  const brand = useSelector((state) => state.allBrands?.brand);
  const loading = useSelector((state) => state.allBrands.loading);

  return [brand, loading];
};

export default useHomeBrand;
