"use client";
import { calculateSubtotal, handleAmount } from "@/shared/utils";
import Gambod from "@/public/images/products/black-gamepad.webp";
import React, { FormEvent, useState } from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { TLanguages } from "@/shared/types";
import Link from "next/link";
type props = {
  dectionary: {
    topLevelTexts: {
      product: string;
      price: string;
      quantity: string;
      subtotal: string;
    };
    buttons: {
      return: string;
      apply: string;
      process: string;
      applyPlaceholder: string;
    };
    cartTotal: {
      title: string;
      subtotal: string;
      shipping: string;
      total: string;
      coupon: string;
    };
    removeTitle: string;
    title: string;
  };
  locale: TLanguages;
};
const Client = ({ dectionary, locale }: props) => {
  const { topLevelTexts, buttons, cartTotal, removeTitle, title } = dectionary;
  const intailProducts = [
    {
      id: "001",
      imgUrl: "imagekkdk",
      name: "Product 1",
      description: "Description of Product 1",
      price: 50,
      rating: [4, 5, 3, 4],
      ratingAmount: 4,
      discount: 10,
      colors: ["Red", "Blue", "Green"],
      amount: 1,
    },
    {
      id: "002",
      imgUrl: "img/product2.jpg",
      name: "Product 2",
      description: "Description of Product 2",
      price: 75,
      rating: [5, 4, 5],
      ratingAmount: 3,
      discount: 15,
      colors: ["Black", "White"],
      amount: 1,
    },
    {
      id: "003",
      imgUrl: "img/product3.jpg",
      name: "Product 3",
      description: "Description of Product 3",
      price: 100,
      rating: [4, 4],
      ratingAmount: 2,
      colors: ["Yellow", "Orange", "Purple"],
      amount: 1,
    },
    {
      id: "004",
      imgUrl: "img/product4.jpg",
      name: "Product 4",
      description: "Description of Product 4",
      price: 120,
      rating: [5, 5, 4],
      ratingAmount: 3,
      discount: 20,
      colors: ["Brown", "Grey"],
      amount: 1,
    },
    {
      id: "005",
      imgUrl: "img/product5.jpg",
      name: "Product 5",
      description: "Description of Product 5",
      price: 90,
      rating: [3, 3, 3, 4],
      ratingAmount: 4,
      colors: ["Pink", "Cyan"],
      amount: 1,
    },
  ];
  const [products, setproducts] = useState(intailProducts);
  const [hasCoupon, setCoupon] = useState(false);
  const copones = ["copo", "copen", "copon", "copo"];
  const handelProductAmountChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedProduct = products.map((product) => {
      console.log(e.target.value);
      return product.id === e.target.id
        ? { ...product, amount: handleAmount(Number(e.target.value)) }
        : product;
    });
    setproducts(updatedProduct);
  };
  const handelCoupon = (e: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const currentCoupon = formData.get("coupon") as string;

    e.preventDefault();

    if (copones.includes(currentCoupon)) {
      setCoupon(true);
    }
  };
  const CalcShaping = (toatl: number) => {
    if (toatl > 1000) {
      return 0;
    } else {
      return Math.floor(toatl * 0.05);
    }
  };
  const CalcTotalAfterCouponAndShiping = (total: number, coupon: boolean) => {
    let newTotal = total;
    newTotal += CalcShaping(newTotal);
    if (coupon) newTotal -= 50;
    return Math.floor(newTotal);
  };

  const removeProductFromCart = (id: string) => {
    const filteredProducts = products.filter((item) => {
      return item.id !== id;
    });
    setproducts(filteredProducts);
  };
  return (
    <div className="container mx-auto mt-8">
      <h1
        className={`text-3xl font-semibold mb-4 ${
          locale == "ar" && "text-right"
        }`}
      >
        {title}
      </h1>
      {/* Product table */}
      <table className="w-full border-collapse border border-gray-200 ">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 p-2">
              {topLevelTexts.product}
            </th>
            <th className="border border-gray-200 p-2">
              {topLevelTexts.price}
            </th>
            <th className="border border-gray-200 p-2">
              {topLevelTexts.quantity}
            </th>
            <th className="border border-gray-200 p-2">
              {topLevelTexts.subtotal}
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ name, id, price, amount, imgUrl }) => (
            <tr key={id}>
              <td className="border border-gray-200 p-2 flex ">
                <div className=" relative">
                  <XMarkIcon
                    onClick={() => removeProductFromCart(id)}
                    height={25}
                    title={removeTitle}
                    className="cursor-pointer hover:bg-red-400 font-bold rounded-full bg-red-600 text-white absolute -top-3 left-0 z-20"
                  />
                  <Image
                    src={Gambod.src}
                    height={50}
                    width={50}
                    alt="product image"
                  />
                </div>
                {name}
              </td>
              <td className="border border-gray-200 p-2">${price}</td>
              <td className="border border-gray-200 p-2">
                <input
                  type="number"
                  name=""
                  id={id}
                  value={amount}
                  onChange={(e) => handelProductAmountChange(e)}
                  className="border m-auto w-full"
                />
              </td>
              <td className="border border-gray-200 p-2">${price * amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Coupon field */}
      <div className="flex justify-between items-start my-8">
        {/* Coupon form */}
        <div className="flex flex-col gap-2 w-2/4">
          <div className="flex  gap-1 ">
            {copones.map((coupon) => {
              return (
                <span className="border px-2 py-1 bg-slate-600 text-white">
                  {coupon}
                </span>
              );
            })}
          </div>
          <form onSubmit={(e) => handelCoupon(e)} className="flex gap-4">
            <input
              type="text"
              name="coupon"
              className="w-60 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder={buttons.applyPlaceholder}
            />
            <button className="bg-color-secondary-2 text-white px-6 py-2 rounded">
              {buttons.apply}
            </button>
          </form>
        </div>

        {/* Checkout section */}
        <div className="flex items-center   flex-col  gap-1 w-2/4  max-w-96">
          <h1 className="text-lg font-semibold mr-4">{cartTotal.title}</h1>
          <hr className="border-gray-300 w-full mr-4" />
          {/* Subtotal */}
          <div
            className={`flex  justify-between  w-full mr-4 ${
              locale == "ar" && "text-right flex-row-reverse"
            }`}
          >
            <span className="text-sm">{cartTotal.subtotal}:</span>
            <span className="font-semibold">
              ${Math.floor(calculateSubtotal(products, 0))}
            </span>
          </div>
          <hr className="border-gray-300 w-full mr-4" />
          {/* Shipping */}
          <div
            className={`flex  justify-between  w-full mr-4 ${
              locale == "ar" && "text-right flex-row-reverse"
            }`}
          >
            <span className="text-sm">{cartTotal.shipping}:</span>
            <span className="font-semibold">
              {CalcShaping(calculateSubtotal(products, 0)) === 0
                ? "Free"
                : `$${CalcShaping(calculateSubtotal(products, 0))}`}
            </span>
          </div>
          <hr className="border-gray-300 w-full mr-4" />
          {/* Total */}
          {hasCoupon && (
            <div
              className={`flex  justify-between  w-full mr-4 ${
                locale == "ar" && "text-right flex-row-reverse"
              }`}
            >
              <span className="text-sm">{cartTotal.coupon}</span>:
              <span className="font-semibold">-50</span>
            </div>
          )}
          <hr className="border-gray-300 w-full mr-4" />
          <div
            className={`flex  justify-between  w-full mr-4 ${
              locale == "ar" && "text-right flex-row-reverse"
            }`}
          >
            <span className="text-sm">{cartTotal.total}</span>:
            <span className="font-semibold">
              $
              {CalcTotalAfterCouponAndShiping(
                calculateSubtotal(products, 0),
                hasCoupon
              )}
            </span>
          </div>
          <hr className="border-gray-300 w-full mr-4" />
          {/* Checkout button */}
          <Link
            href={"/Checkout"}
            className="bg-blue-500 text-white px-6 py-2  my-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            {buttons.process}
          </Link>
        </div>
      </div>
      ;
    </div>
  );
};

export default Client;
