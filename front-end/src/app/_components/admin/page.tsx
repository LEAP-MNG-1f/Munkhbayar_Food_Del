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
      const response = await fetch(`BACKEND_END_POINT/categories`);
      const result = await response.json();

      setCategoryDatas(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <Adminpage />;
};
