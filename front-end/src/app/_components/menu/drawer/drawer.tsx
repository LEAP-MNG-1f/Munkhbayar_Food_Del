import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";

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

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="w-[500px] h-full flex">
        <div className="w-full flex flex-col justify-between items-center">
          <div className="w-full h-full flex flex-col justify-center items-center gap-3 px-6">
            <div className="font-bold p-5 text-xl">Таны сагс</div>
            <div className="border-[1px] border-black w-full"></div>
            <div className="flex w-full">
              <Littlebox />
            </div>
            <div className="border-[1px] border-black w-full"></div>
          </div>
          <div className="flex w-full"></div>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <button onClick={toggleDrawer(anchor, true)} className="text-black">
            Сагс
          </button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};
