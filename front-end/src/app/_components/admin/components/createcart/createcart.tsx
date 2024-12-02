"use client";

import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import { useState } from "react";

type CategoryValuesType = {
  name?: string;
};

export const ResponsiveDialog = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const BACKEND_ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_URL;

  const formik = useFormik<CategoryValuesType>({
    initialValues: {
      name: "",
    },

    onSubmit: async (values) => {
      const requestData = {
        ...values,
      };
      const option = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      };

      try {
        const response = await fetch(
          `${BACKEND_ENDPOINT}/api/categories`,
          option
        );
        const data = await response.json();

        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
      } catch (error) {
        console.error(error);
      }
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="flex w-full">
        <button
          onClick={handleClickOpen}
          className="flex w-full border-2 rounded-md justify-center items-center p-2 gap-3"
        >
          <AddIcon />
          <h1>Create new category</h1>
        </button>
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="flex flex-col justify-between items-center w-[500px] h-auto gap-5">
          <form action="" onSubmit={formik.handleChange}>
            <div className="flex justify-evenly items-center w-full h-auto border p-5">
              <CloseIcon className="hover:bg-slate-300 rounded-sm " />
              <h1 className="flex justify-center items-center font-bold text-2xl w-[80%]">
                Create food
              </h1>
              <div className="text-[#E0E0E0]">.</div>
            </div>

            <div className="flex flex-col w-full h-auto gap-2 px-8">
              <h1>Category name</h1>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Placeholder"
                className="rounded-md border p-3 bg-[#F4F4F4]"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </div>

            <div className="flex justify-end items-center w-full h-[10%] py-6 border">
              <div className="flex justify-end w-full gap-4 px-6">
                <button
                  onClick={() => formik.resetForm()}
                  className="flex justify-center items-center p-2 font-semibold rounded-md"
                >
                  Clear
                </button>
                <button className="flex justify-center items-center py-2 px-4 border bg-black text-white rounded-lg font-bold">
                  Continue
                </button>
              </div>
            </div>
          </form>
        </div>
      </Dialog>
    </>
  );
};
