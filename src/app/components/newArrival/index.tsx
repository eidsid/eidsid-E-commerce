import React from "react";
import { TLanguages } from "@/shared/types";
import plastation from "@/public/images/home/ps5.webp";
import speakers from "@/public/images/home/speakers.webp";
import bannermicro from "@/public/images/home/bannermicro.webp";
import perfume from "@/public/images/home/perfume.webp";
import Image from "next/image";
import Link from "next/link";

type props = {
  dic: {
    title: string;
    description: string;
    shopnow: string;
  };
  Local: TLanguages;
};
const NewArival = async ({ Local, dic }: props) => {
  const { title, description, shopnow } = dic;
  const newArivalProducts = [
    {
      id: "1223d3",
      title: "PlayStation 5",
      img: plastation,
      description: "Black and White version of the PS5 coming out on sale.",
      href: "playstation5",
    },
    {
      id: "1223d32",
      title: "speakers",
      img: speakers,
      description: "Amazon wireless speakers",
      href: "speakers",
    },
    {
      id: "1223d43",
      title: "Perfume",
      img: perfume,
      description: "GUCCI INTENSE OUD EDP",
      href: "Perfume",
    },
    {
      id: "1223d7893",
      title: "micro",
      img: bannermicro,
      description: "Amazon  micro",
      href: "micro",
    },
  ];

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
        </div>
      </section>
      <section className="grid grid-cols-4 grid-rows-2   h-400 gap-4  my-4">
        <div className="col col-span-2 row-span-2">
          <div className=" h-full w-full relative bg-black   text-white z-0">
            <Image
              fill
              src={newArivalProducts[0].img.src}
              alt={`${newArivalProducts[0].title} image`}
              className=" -z-10"
            />
            <div className="flex  flex-col justify-end z-10  p-2   gap-4 h-full ">
              <span className=" text-lg font-bold">
                {newArivalProducts[0].title}
              </span>
              <p className=" text-sm opacity-85">
                {newArivalProducts[0].description}
              </p>
              <Link
                href={`products/${newArivalProducts[0].href}`}
                className=" underline"
              >
                {shopnow}
              </Link>
            </div>
          </div>
        </div>

        <div className="col  col-span-2 row-span-2 grid gap-4 ">
          <div className="col-span-2 row-span-2  relative bg-black   text-white z-0">
            <Image
              fill
              src={newArivalProducts[1].img.src}
              alt={`${newArivalProducts[1].title} image`}
              className=" -z-10"
            />
            <div className="flex  flex-col justify-end z-10  p-2   gap-4 h-full ">
              <span className=" text-lg font-bold">
                {newArivalProducts[1].title}
              </span>
              <p className=" text-sm opacity-85">
                {newArivalProducts[1].description}
              </p>
              <Link
                href={`products/${newArivalProducts[1].href}`}
                className=" underline"
              >
                {shopnow}
              </Link>
            </div>
          </div>

          <div className="grid gap-4 col-span-2 row-span-2  grid-cols-2">
            <div className="col col-span-1 row-span-1  relative bg-black   text-white z-0">
              <Image
                fill
                src={newArivalProducts[2].img.src}
                alt={`${newArivalProducts[2].title} image`}
                className=" -z-10"
              />
              <div className="flex  flex-col justify-end z-10  p-2   gap-4 h-full ">
                <span className=" text-lg font-bold">
                  {newArivalProducts[2].title}
                </span>
                <p className=" text-sm opacity-85">
                  {newArivalProducts[2].description}
                </p>
                <Link
                  href={`products/${newArivalProducts[2].href}`}
                  className=" underline"
                >
                  {shopnow}
                </Link>
              </div>
            </div>
            <div className="col  col-span-1 row-span-1  relative bg-black   text-white z-0">
              <Image
                fill
                src={newArivalProducts[3].img.src}
                alt={`${newArivalProducts[3].title} image`}
                className=" -z-10"
              />
              <div className="flex  flex-col justify-end z-10  p-2   gap-4 h-full ">
                <span className=" text-lg font-bold">
                  {newArivalProducts[3].title}
                </span>
                <p className=" text-sm opacity-85">
                  {newArivalProducts[3].description}
                </p>
                <Link
                  href={`products/${newArivalProducts[3].href}`}
                  className=" underline"
                >
                  {shopnow}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default NewArival;
