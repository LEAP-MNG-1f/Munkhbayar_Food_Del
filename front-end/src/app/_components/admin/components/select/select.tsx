import { categoryDatas } from "../datatype/datatype";
import DeleteIcon from "@mui/icons-material/Delete";

type SelectAdminProps = {
  categories: categoryDatas[];
  deleteCategory: (_id: string) => void;
};

export const SelectAdmin = ({
  categories,
  deleteCategory,
}: SelectAdminProps) => {
  return (
    <div className="w-full flex flex-col gap-3">
      {categories.length > 0 ? (
        categories.map((category, id) => {
          console.log(category.name);
          return (
            <div
              key={`${category.name}-${id}`}
              className="w-full flex justify-between items-center border rounded-md p-2 hover:bg-[#18BA51] font-medium"
            >
              <h1>{category.name}</h1>
              <button
                onClick={() => deleteCategory(category._id)}
                className="flex flex-col gap-1 p-2"
              >
                <DeleteIcon />
              </button>
            </div>
          );
        })
      ) : (
        <div>No categories available</div>
      )}
    </div>
  );
};
