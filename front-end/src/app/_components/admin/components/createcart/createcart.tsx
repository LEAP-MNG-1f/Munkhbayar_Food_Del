"use client";

import Dialog from "@mui/material/Dialog";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";

export const ResponsiveDialog = () => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const BACKEND_ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_URL;

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/categories`);
      const data = await response.json();

      if (data.success && Array.isArray(data.data)) {
        setCategories(data.data);
      } else {
        console.error("Invalid categories format:", data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const addCategory = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newCategory.trim()) return;

    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/categories`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newCategory }),
      });

      if (response.ok) {
        const addedCategory = await response.json();
        if (addedCategory && addedCategory.data) {
          setNewCategory("");
          handleClose();
        } else {
          console.error("Invalid response format:", addedCategory);
        }
      } else {
        console.error("Failed to add category:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

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
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="flex flex-col justify-between items-center w-[500px] h-auto gap-5">
          <form
            onSubmit={addCategory}
            className="flex flex-col items-center justify-between w-full h-[300px] p-2"
          >
            <div className="flex justify-evenly items-center w-full h-full p-5">
              <CloseIcon
                onClick={handleClose}
                className="hover:bg-slate-300 rounded-sm cursor-pointer"
              />
              <h1 className="flex justify-center items-center font-bold text-2xl w-[80%]">
                Create food
              </h1>
              <div className="text-[#E0E0E0]">.</div>
            </div>

            <div className="flex flex-col w-full h-full gap-2 px-8">
              <h1>Category name</h1>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter category name"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="w-full rounded-md border p-3 bg-[#F4F4F4]"
              />
            </div>

            <div className="flex justify-end items-center w-full h-full py-6">
              <div className="flex justify-end w-full gap-4 px-6">
                <button
                  type="button"
                  onClick={() => setNewCategory("")}
                  className="flex justify-center items-center p-2 font-semibold rounded-md"
                >
                  Clear
                </button>
                <button
                  type="submit"
                  className="flex justify-center items-center py-2 px-4 border bg-black text-white rounded-lg font-bold"
                >
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
