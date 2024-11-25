import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
type CustomizedDialogsProps = {
  text?: string;
};

export const CustomizedDialogs = (props: CustomizedDialogsProps) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button onClick={handleClickOpen} className="flex text-black gap-2">
        <ShoppingCartIcon />
        <div className="flex justify-center items-center">{props.text}</div>
      </button>
      <BootstrapDialog
        maxWidth="md"
        fullWidth
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div className="flex w-full h-auto">
          <div className="flex w-full h-auto p-3">
            <div className="flex gap-2 w-full h-auto">
              <div className="w-full h-auto">
                <img src="./cook4.png" alt="" className="w-full h-full" />
              </div>
              <div className="flex flex-col justify-between w-full h-auto p-6 gap-2">
                <div>
                  <h1 className="font-semibold text-[20px]">Main Pizza </h1>
                  <p className="text-green-500">34,800₮</p>
                </div>
                <div>
                  <h1 className="font-semibold">Орц</h1>
                  <p className="p-2 text-[#767676] text-[12px] bg-[#F6F6F6] rounded-lg">
                    Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="font-semibold">Тоо</div>
                  <div>2</div>
                  <button className="flex w-full bg-green-500 justify-center items-center rounded-md text-[#FFFFFF] py-2">
                    Сагслах
                  </button>
                </div>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={(theme) => ({
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500],
                  })}
                >
                  <CloseIcon />
                </IconButton>
              </div>
            </div>
          </div>
          {/* <DialogActions>
            <button autoFocus onClick={handleClose}>
              Save changes
            </button>
          </DialogActions> */}
        </div>
      </BootstrapDialog>
    </React.Fragment>
  );
};
