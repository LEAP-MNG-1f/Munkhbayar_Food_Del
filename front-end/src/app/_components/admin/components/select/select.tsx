import { categoryDatas } from "../datatype/datatype";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";

type SelectAdminProps = {
  categories: categoryDatas[];
  deleteCategory: (_id: string) => void;
  editCategory: (id: string, updatedData: Partial<categoryDatas>) => void;
};

export const SelectAdmin = ({
  categories,
  deleteCategory,
  editCategory,
}: SelectAdminProps) => {
  const [editingCategoryId, setEditingCategoryId] = useState<string | null>(
    null
  );
  const [newCategoryName, setNewCategoryName] = useState<string>("");
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleEditClick = (categoryId: string, currentName: string) => {
    setEditingCategoryId(categoryId);
    setNewCategoryName(currentName);
    setOpenDialog(true);
  };

  const handleSaveClick = () => {
    if (!editingCategoryId) {
      console.error("Invalid category ID");
      return;
    }

    if (newCategoryName.trim()) {
      console.log("Saving Category with ID:", editingCategoryId);

      editCategory(editingCategoryId, { name: newCategoryName });

      setOpenDialog(false);
      setNewCategoryName("");
    } else {
      console.error("Category name cannot be empty");
    }
  };

  return (
    <div className="w-full flex flex-col gap-3">
      {categories.length > 0 ? (
        categories.map((category) => (
          <div
            key={category._id}
            className="w-full flex justify-between items-center border rounded-md p-2 font-medium"
          >
            <h1>{category.name}</h1>
            <div className="flex gap-2">
              <button
                onClick={() => deleteCategory(category._id!)}
                className="flex flex-col gap-1 p-2 hover:bg-slate-200"
              >
                <DeleteIcon />
              </button>

              <button
                onClick={() => handleEditClick(category._id!, category.name)}
                className="flex flex-col gap-1 p-2 hover:bg-slate-200"
              >
                <EditIcon />
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>No categories available</div>
      )}

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <div className="flex flex-col justify-between items-center w-[500px] h-auto gap-5 p-4">
          <div className="flex justify-between items-center w-full">
            <h1 className="font-bold text-2xl">Edit Category</h1>
            <CloseIcon
              onClick={() => setOpenDialog(false)}
              className="cursor-pointer"
            />
          </div>
          <input
            type="text"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter new category name"
          />
          <div className="flex justify-end w-full gap-4 mt-4">
            <button
              type="button"
              onClick={() => setOpenDialog(false)}
              className="px-4 py-2 bg-gray-500 text-white rounded-md"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSaveClick}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Save
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
