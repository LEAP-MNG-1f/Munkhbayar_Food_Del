import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ColorSwitches } from "../switch/switch";
import CloseIcon from "@mui/icons-material/Close";

export const AdminAddCart = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button
        className="bg-[#18BA51] text-[white] w-[150px] rounded-md p-2 text-[14px]"
        onClick={handleClickOpen}
      >
        Add new food
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="flex flex-col justify-between items-center w-[500px] h-auto">
          <div className="flex justify-evenly items-center w-full h-[60px] border  px-5">
            <CloseIcon className="hover:bg-slate-300 rounded-sm " />
            <h1 className="flex justify-center items-center font-bold text-2xl w-[80%]">
              Create food
            </h1>
            <div className="text-[#E0E0E0]">.</div>
          </div>
          <div className="flex w-full h-full p-6">
            <div className="flex flex-col w-full h-full gap-2">
              <div className="flex flex-col w-full h-auto gap-2">
                <h1>Хоолны нэр</h1>
                <input
                  type="text"
                  placeholder="Placeholder"
                  className="rounded-md border p-2 bg-[#F4F4F4]"
                />
              </div>
              <div className="flex flex-col w-full h-auto gap-2">
                <h1>Хоолны нэр</h1>
                <select className="rounded-md border p-2 bg-[#F4F4F4]"></select>
              </div>
              <div className="flex flex-col w-full h-auto gap-2">
                <h1>Хоолны орц</h1>
                <input
                  type="text"
                  placeholder="Placeholder"
                  className="rounded-md border p-2 bg-[#F4F4F4]"
                />
              </div>
              <div className="flex flex-col w-full h-auto gap-2">
                <h1>Хоолны үнэ</h1>
                <input
                  type="text"
                  placeholder="Placeholder"
                  className="rounded-md border p-2 bg-[#F4F4F4]"
                />
              </div>
              <div className="flex flex-col w-full h-auto gap-2">
                <div className="flex items-center">
                  <ColorSwitches />
                  <h1>Хямдралтай эсэх</h1>
                </div>
                <input
                  type="text"
                  placeholder="Placeholder"
                  className="rounded-md border p-3 bg-[#F4F4F4]"
                />
              </div>
              <div className="flex flex-col w-full h-[200px] gap-2 ">
                <h1>Хоолны зураг</h1>
                <div className="flex justify-center items-center bg-[#F4F4F4] rounded-md border p-2 w-full h-full">
                  <div className="flex justify-center items-center py-2 px-4 border bg-black text-white rounded-lg font-semibold">
                    Add image
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center w-full h-[10%] py-6 border">
            <div className="flex justify-end w-full gap-4 px-6">
              <button className="flex justify-center items-center p-2 font-semibold rounded-md">
                Clear
              </button>
              <button className="flex justify-center items-center py-2 px-4 border bg-black text-white rounded-lg font-bold">
                Continue
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
};
