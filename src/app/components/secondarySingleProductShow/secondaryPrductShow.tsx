import { IProductCard } from "@/shared/types";
import Image from "next/image";
import React from "react";
import defaultImage from "@/public/images/products/black-gamepad.webp";
import { HeartIcon as FillHeartIcon } from "@heroicons/react/24/solid";

type props = {
  product: IProductCard;
  dic: {
    removeTitle: string;
  };
};
function SecondaryPrductShow({ product, dic }: props) {
  const { imgUrl, name, price, discount, id } = product;
  const removeProduct = (id: string) => {
    console.log(id);
  };

  return (
    <div
      key={id}
      className="rounded-lg overflow-hidden shadow-lg bg-white  w-60 relative "
    >
      <div className="relative h-40 w-full border flex justify-between ">
        <Image
          src={defaultImage.src}
          alt={name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between p-1 ">
          {discount && (
            <span className="text-white bg-red-700 rounded-md text-xs py-1 px-2  font-extrabold  ">
              -{discount}%
            </span>
          )}
          <FillHeartIcon
            className={
              "  bg-fuchsia-100 rounded-full p-1  text-red-600 z-50 cursor-pointer "
            }
            height={30}
            width={30}
          />
        </div>
        <div className="flex  items-center justify-between ">
          <h2 className="text-lg font-semibold mb-2">{name}</h2>
          <p className="text-sm text-gray-700 mb-2">Price: ${price}</p>
        </div>

        <button
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold min-w-24 px-4 h-8 rounded"
          onClick={() => removeProduct(id)}
        >
          {dic.removeTitle}
        </button>
      </div>
    </div>
  );
}

export default SecondaryPrductShow;
