import React from "react";
import bannerImage1 from "@/public/images/home/banner1.webp";
import bannerImage2 from "@/public/images/products/book-self.webp";
import bannerImage3 from "@/public/images/home/banner3.webp";
import bannerImage4 from "@/public/images/home/banner4.webp";
import Image from "next/image";
import "@/app/globals.css";
import Link from "next/link";
import { useLocale } from "next-intl";
const Banner = () => {
  const local = useLocale();
  const sliderproducts = [
    {
      img: bannerImage1,
      title: "img one",
      description: "this is image one description ",
      id: 1,
    },
    {
      img: bannerImage2,
      title: "img two",
      description: "this is image two description ",
      id: 2,
    },
    {
      img: bannerImage1,
      title: "img three",
      description: "this is image three description ",
      id: 3,
    },
    {
      img: bannerImage3,
      title: "img three",
      description: "this is image three description ",
      id: 3,
    },
    {
      img: bannerImage4,
      title: "img four",
      description: "this is image four description ",
      id: 4,
    },
  ];
  return (
    <div className="flex sliderContainer   h-full w-600  relative border-1 mx-auto my-1 ">
      <div className="slider-content overflow-x-scroll flex   h-fit  snap-mandatory snap-x  scroll-smooth shadow-sm w-full  m-h transition-all   relative nocsrolbar">
        {sliderproducts.map(({ img, title, id }) => {
          return (
            <div
              id={`slider${id}`}
              key={id}
              className="w-full h-96  flex-shrink-0 mr-4 ml-4 p-4 relative "
            >
              <Link href={`${local}/products/${id}`}>
                <Image
                  src={img.src}
                  fill
                  alt={title}
                  className="w-full h-full rounded-s-lg  "
                />
              </Link>
            </div>
          );
        })}
      </div>
      <div className="slider-nav mt-4 flex justify-center absolute  bottom-8  left-1/2  -translate-x-1/2  z-10 ">
        {sliderproducts.map(({}, index) => (
          <a
            key={index}
            href={`#slider${index}`}
            className="w-6 h-6 bg-gray-400 rounded-full mx-1  active:bg-white"
          ></a>
        ))}
      </div>
    </div>
  );
};

export default Banner;
