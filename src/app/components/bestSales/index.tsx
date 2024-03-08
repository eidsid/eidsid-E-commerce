import React from "react";
import { homeSalesSwiper } from "@/data/index";
import Product from "../productShow/Product";
import Link from "next/link";
import { TLanguages } from "@/shared/types";
type props = {
  dic: {
    title: string;
    description: string;
    viewAll: string;
  };
  Local: TLanguages;
};
const BestSales = async ({ Local, dic }: props) => {
  const favoritesIDs: string[] = ["1", "3", "2", " 4", "6", " 7", " 8"];

  const { title, description, viewAll } = dic;

  return (
    <section className="flex flex-col  gap-4 ">
      <section className=" flex flex-col gap-8 pl-4   ">
        <div
          className={`col flex gap-4 items-center ${
            Local == "ar" && " flex-row-reverse"
          }`}
        >
          <span className=" h-10 w-4 bg-red-600 rounded-2xl "></span>
          <span className="  text-sm font-bold  text-red-600">{title}</span>
        </div>
        <div
          className={`flex gap-4 items-center justify-between  ${
            Local == "ar" && " flex-row-reverse"
          }`}
        >
          <h2 className=" font-bold  text-3xl  min-w-fit  py-5 first-letter:capitalize ">
            {description}
          </h2>
          <Link
            className=" h-14 bg-red-700 text-white  py-4 px-8"
            href={"products/BestSales"}
          >
            {viewAll}
          </Link>
        </div>
      </section>
      <section className="flex overflow-x-scroll gap-4 ">
        {homeSalesSwiper.map((product) => {
          return (
            <Product
              favoritesIDs={favoritesIDs}
              product={product}
              key={product.id}
            />
          );
        })}
      </section>
    </section>
  );
};

export default BestSales;
