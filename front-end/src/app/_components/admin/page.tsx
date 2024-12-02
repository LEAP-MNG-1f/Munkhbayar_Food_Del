" use client";
import { useEffect, useState } from "react";
import { Adminpage } from "./components/admin/admin";
import { categoryDatas } from "./components/datatype/datatype";

export const RealAdminPage = () => {
  const [categoryDatas, setCategoryDatas] = useState<categoryDatas[]>([]);
  console.log("csrfsrf", categoryDatas);

  const BACKEND_END_POINT = process.env.NEXT_PUBLIC_BACKEND_URL;

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/categories`);
      const result = await response.json();
      console.log("ihyimgygutg", result);

      setCategoryDatas(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <Adminpage categoryDatas={categoryDatas} />;
};
