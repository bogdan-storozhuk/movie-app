import React from "react";
import useFetch from "./useFetch";
import { useLocation } from "react-router-dom";

const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

export { useQuery, useFetch };
