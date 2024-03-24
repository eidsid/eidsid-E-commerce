"use client";
import { IProductCard } from "@/shared/types";
import { HeartIcon } from "@heroicons/react/24/outline";
import {
  StarIcon,
  HeartIcon as FillHeartIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import gamepad from "@/public/images/products/gamepad-red.webp";
import Image from "next/image";
import Link from "next/link";
import { calcDiscount } from "@/shared/utils";

type prop = {
  favoritesIDs: string[];
  product: IProductCard;
};
const Product = ({ favoritesIDs, product }: prop) => {
  const { imgUrl, name, price, rating, ratingAmount, discount, id } = product;
  const isFavorite = favoritesIDs.includes(product.id);
  const addProductToFavFunction = (productID: string): void => {
    console.log(`product with is ${productID} add to favorites`);
  };
  return (
    <div className=" relative  gap-4">
      <div className="flex  justify-center items-center border  relative  h-44 w-44  rounded-md   bg-slate-200  group       ">
        <div className="flex  absolute top-0  left-0 p-2  justify-between  items-start w-full ">
          {discount && (
            <span className="text-white bg-red-700 rounded-md text-xs py-1 px-2  font-extrabold  ">
              -{discount}%
            </span>
          )}
          {isFavorite ? (
            <FillHeartIcon
              className={
                "  bg-fuchsia-100 rounded-full p-1  text-red-600 z-50 cursor-pointer "
              }
              height={30}
              width={30}
              onClick={() => addProductToFavFunction(id)}
            />
          ) : (
            <HeartIcon
              className={
                "  bg-fuchsia-100 rounded-full p-1 z-50 cursor-pointer "
              }
              height={30}
              width={30}
              onClick={() => addProductToFavFunction(id)}
            />
          )}
        </div>
        <Link href={`Products/${id}`}>
          <Image
            src={gamepad.src}
            height={100}
            width={100}
            alt={`${name} image`}
            className=" opacity-90   group-hover:scale-150  group-hover:opacity-100 duration-700"
          />
        </Link>
      </div>

      <h1 className=" font-bold">{name}</h1>
      <div className="price flex  gap-3  px-4  text-sm">
        {discount && (
          <span className="  text-red-600  font-medium">
            ${calcDiscount(price, discount)}
          </span>
        )}
        <span className=" line-through opacity-60">${price}</span>
      </div>
      <div className="rating flex gap-4">
        <span className="flex ">
          {rating.map((fill, index) => {
            return (
              <StarIcon
                key={index}
                hanging={15}
                width={15}
                className={`${fill && " text-yellow-400"}  `}
              />
            );
          })}
        </span>
        <span className=" opacity-50  font-bold text-sm">({ratingAmount})</span>
      </div>
    </div>
  );
};

export default Product;
