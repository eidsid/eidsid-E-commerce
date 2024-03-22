import SecondaryPrductShow from "@/app/components/secondarySingleProductShow/secondaryPrductShow";
import WishPrductShow from "@/app/components/secondarySingleProductShow/secondaryPrductShow";
import { homeSalesSwiper } from "@/data";
import { TLanguages } from "@/shared/types";
import React from "react";

type Props = {
  title: string;
  locale: TLanguages;
  dic: {
    addTitle: string;
    removeTitle: string;
  };
};

const WishListSection = ({ title, dic }: Props) => {
  const wishlist = homeSalesSwiper;

  return (
    <div className="bg-gray-100 py-8 px-4">
      <h1 className="text-center text-2xl font-bold mb-6">{title}</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {wishlist.map((product) => (
          <SecondaryPrductShow product={product} dic={dic} />
        ))}
      </div>
    </div>
  );
};

export default WishListSection;
