import React from "react";
import Chair from "/images/chair.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function SingleProduct({ type }) {
  return (
    <div
      className="relative border-2 bg-white group
    group-hover:border-2 hover:border-primary"
    >
      <img src={Chair} className="w-full mx-auto aspect-square bg-contain" />
      <div
        className={`bg-white group-hover:bg-primary text-2xl 
       `}
      >
        <div className={`mx-4 py-2  
        ${
          type === "latest"
            ? "flex items-center justify-between"
            : "flex items-center flex-col"
        }`}>
        <p className="font-semibold text-secondary text-3xl my-3 group-hover:text-white">
          Chair
        </p>
        <p className="group-hover:text-white">$100</p>
        </div>

        <span className="bg-slate-100 rounded-full p-4 text-primary absolute top-2 left-2 hidden group-hover:inline-block">
          <AiOutlineShoppingCart className="text-2xl" />
        </span>
      </div>
    </div>
  );
}
