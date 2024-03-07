import React from "react";
import { homeSalesSwiper } from "@/data/index";
import Product from "../productShow/Product";
import { getDict } from "../../../../dictionaries/dictionaries";
import { getLocaleInServer } from "@/shared/utils";
import { headers } from "next/headers";
import TimeShow from "../timeShow/TimeShow";
import Link from "next/link";
const FlashSales = async () => {
  const favoritesIDs: string[] = ["1", "3", "2", " 4", "6", " 7", " 8"];
  const Local = getLocaleInServer(headers);
  const dectionary: any = await getDict(Local);

  const Salesdescription = dectionary.pages.index.sales;
  const { title, description, viewAll, ...timeDectionary } = Salesdescription;

  //timer
  const currentDate = new Date();
  // Set the time for the end of the day
  const endOfDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() + 3,
    23,
    19,
    56
  );

  const endDay = new Date(endOfDay.getTime() + 3 * 24 * 60 * 60 * 1000);

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
        <div className={`flex gap-4  ${Local == "ar" && " flex-row-reverse"}`}>
          <h2 className=" font-bold  text-3xl  min-w-fit  py-5 first-letter:capitalize ">
            {description}
          </h2>
          <TimeShow date={endDay} dict={timeDectionary} />
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
      <div className=" flex justify-center mb-4">
        <Link
          className=" bg-red-700 text-white  py-4 px-8"
          href={"products/FlashSales"}
        >
          {viewAll}
        </Link>
      </div>
    </section>
  );
};

export default FlashSales;
