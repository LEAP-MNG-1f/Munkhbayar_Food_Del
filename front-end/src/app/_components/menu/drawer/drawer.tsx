import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Littlebox } from "../littlebox/littlebox";

type Anchor = "right";

export const AnchorTemporaryDrawer = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <div key={anchor}>
          <button
            onClick={toggleDrawer(anchor, true)}
            className="text-black flex justify-center items-center gap-3"
          >
            <ShoppingCartIcon />
            Сагс
          </button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div className="flex h-full">
              <div className="w-[800px] h-full flex flex-col justify-center items-center p-4">
                <div className="flex h-full w-full flex-col justify-between">
                  <div className="flex flex-col items-center gap-3 px-6">
                    <div className="font-bold p-5 text-xl">Таны сагс</div>
                  </div>
                  <div className="flex flex-col w-full h-full gap-3">
                    <div className="border-[1px] border-[#D6D8DB] w-full"></div>
                    <Littlebox />
                    <div className="border-[1px] border-[#D6D8DB] w-full"></div>
                  </div>
                  <div className="flex w-full h-[5%] justify-center items-center p-2">
                    <div className="w-[40%] h-full flex flex-col justify-center">
                      <h1 className="text-[#5E6166]">Нийт төлөх дүн</h1>
                      <h2 className="font-bold">34,800₮</h2>
                    </div>
                    <button className="w-[40%] h-full flex justify-center items-center rounded-md bg-[#18BA51] text-[white] font-normal">
                      Захиалах
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Drawer>
        </div>
      ))}
    </div>
  );
};
