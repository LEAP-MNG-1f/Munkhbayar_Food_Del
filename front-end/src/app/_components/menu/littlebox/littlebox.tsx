import CloseIcon from "@mui/icons-material/Close";
export const Littlebox = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col w-full">
            <h1>Main Pizza </h1>
            <h1>34,800₮</h1>
          </div>
          <div className="flex justify-center items-center">
            <CloseIcon />
          </div>
        </div>
        <div></div>
        <div></div>
      </div>

      <div></div>
    </div>
  );
};
