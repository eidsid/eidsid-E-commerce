"use client";
import { IProductCard, TLanguages } from "@/shared/types";
import React, { useState } from "react";
import { homeSalesSwiper } from "@/data/index";
import Product from "@/app/components/productShow/Product";
import { XMarkIcon } from "@heroicons/react/24/outline";
type props = {
  dic: {
    wishlist: string;
    moveAllBag: string;
    forYou: string;
    seeAll: string;
    removeTitle: string;
    movetoBag: string;
  };
  Locale: TLanguages;
};

const Client = ({ dic, Locale }: props) => {
  const { wishlist, movetoBag, forYou, seeAll, removeTitle } = dic;

  // Only show 5 wishlist products initially
  const [wishlistProducts, setWishlistProducts] = useState<IProductCard[]>(
    homeSalesSwiper.slice(0, 5)
  );

  const [suggestedProducts, setsuggestedProducts] =
    useState<IProductCard[]>(homeSalesSwiper);

  // Toggle for showing all wishlist products
  const [showAll, setShowAll] = useState<boolean>(false);

  // Function to handle toggling the showAll state and updating the wishlist products
  const handleSeeAll = () => {
    setShowAll(!showAll);
    if (!showAll) {
      setWishlistProducts(homeSalesSwiper); // Show all products
    } else {
      setWishlistProducts(homeSalesSwiper.slice(0, 5)); // Show only 5 products
    }
  };

  // Function to remove a product from the wishlist
  const removeProductFromWishlist = (id: string) => {
    console.log(`Item with ID ${id} removed from wishlist`);
    // Implement the logic to remove the product from the wishlistProducts state
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="mb-10  flex flex-col gap-10">
        <div
          className={`font-bold flex gap-2 ${
            Locale === "ar" && "self-end flex-row-reverse"
          }`}
        >
          <h2> {wishlist} </h2>
          <span> ({wishlistProducts.length})</span>
        </div>

        <div className="flex  flex-wrap justify-center gap-4">
          {wishlistProducts.map((product) => (
            <div className="relative" key={product.id}>
              <div className="flex justify-between">
                <XMarkIcon
                  onClick={() => removeProductFromWishlist(product.id)}
                  height={30}
                  title={removeTitle}
                  className="cursor-pointer font-bold"
                />
                <button className="bg-green-500 p-2 text-sm opacity-80 scale-75 hover:opacity-100 hover:scale-100 delay-100 transition-all">
                  {movetoBag}
                </button>
              </div>
              <Product
                favoritesIDs={[product.id]}
                product={{ ...product }}
                key={product.id}
              />
            </div>
          ))}
        </div>

        {/* Render the "See All" button */}
        <button onClick={handleSeeAll}>{showAll ? "Hide" : seeAll}</button>
      </div>

      <div className="mb-10  flex flex-col gap-10">
        <h2
          className={`text-xl font-semibold mb-4 ${
            Locale === "ar" && "text-right"
          }`}
        >
          {forYou}
        </h2>
        <div className="flex  flex-wrap justify-center  gap-4">
          {/* Render suggested products */}
          {suggestedProducts.map((product) => (
            <Product favoritesIDs={[]} product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;
