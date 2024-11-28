"use client";

import { useState } from "react";

import { Cookscard } from "../menu/cookscard/cook.cart";

const categories = [
  {
    _id: 1,
    name: "Европ хоол",
  },
  {
    _id: 2,
    name: "Монгол хоол",
  },
  {
    _id: 3,
    name: "Ази хоол",
  },
  {
    _id: 4,
    name: "Уух зүйлс",
  },
];
export const Menupage = () => {
  const [focus, setFocus] = useState(categories[0].name);

  return (
    <main className="flex flex-col justify-center items-center w-full h-auto gap-[100px] pt-[100px] pb-[100px]">
      <div className="flex justify-between items-center w-[80%] gap-[26px]">
        {categories.map((category) => {
          return (
            <Cookscard
              key={category._id}
              name={category.name}
              focus={focus}
              setFocus={setFocus}
            />
          );
        })}
      </div>
    </main>
  );
};
