import React from "react";
import Product from "../productShow/Product";
import { homeSalesSwiper } from "@/data";
import { TLanguages } from "@/shared/types";
import Link from "next/link";
type props = {
  dic: {
    title: string;
    description: string;
    viewAll: string;
    timeDectionary: any;
  };
  Local: TLanguages;
  favoritesIDs: string[];
};
const OurProfucts = ({ dic, Local, favoritesIDs }: props) => {
  const { viewAll, description, title } = dic;
  return (
    <div className="flex flex-col py-4 justify-center max-w-full min-h-fit ">
      <section
        className={`flex items-center justify-between max-w-full ${
          Local == "ar" && " flex-row-reverse"
        }`}
      >
        <div
          className={`col flex gap-4 items-center ${
            Local == "ar" && " flex-row-reverse"
          }`}
        >
          <span className=" h-10 w-4 bg-red-600 rounded-2xl "></span>
          <span className="  text-sm font-bold  text-red-600">{title}</span>
        </div>
        <h2 className=" font-bold  text-3xl  min-w-fit  py-5 first-letter:capitalize ">
          {description}
        </h2>
      </section>
      <div className="flex gap-4   flex-wrap  justify-center">
        {homeSalesSwiper.map((product, index) => (
          <Product key={index} product={product} favoritesIDs={favoritesIDs} />
        ))}
      </div>

      <Link
        href={"/products"}
        className=" bg-red-600 px-8 py-4 w-fit mx-auto my-4 text-white"
      >
        {viewAll}
      </Link>
    </div>
  );
};

export default OurProfucts;
