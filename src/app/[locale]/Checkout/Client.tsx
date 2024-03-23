"use client";
import Gambod from "@/public/images/products/black-gamepad.webp";
import React, { useState } from "react";
import Image from "next/image";
import { TLanguages } from "@/shared/types";
import visaCardIcon from "@/public/images/check_out/credit-card-1.webp";
import masterCardIcon from "@/public/images/check_out/credit-card-2.webp";
import Link from "next/link";
import { useRouter } from "next/navigation";

type props = {
  dectionary: {
    form: {
      title: string;
      firstName: string;
      companyName: string;
      streetAddress: string;
      apartment: string;
      phoneNumber: string;
      city: string;
      email: string;
      checkbox: string;
    };
    priceSection: {
      subtotal: string;
      shipping: string;
      total: string;
      payment: {
        bank: string;
        cash: string;
      };
      order: string;
    };
    cartTitle: string;
  };

  locale: TLanguages;
};
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
type check_out = {
  products: {
    id: string;
    imgUrl: string;
    name: string;
    description: string;
    price: number;
    rating: number[];
    ratingAmount: number;
    discount: number;
    colors: string[];
    amount: number;
  }[];
  total: number;
};
const intailcheckedOutObject = {
  products: intailProducts,
  total: 1200,
};
const Client = ({ dectionary, locale }: props) => {
  const { form, priceSection, cartTitle } = dectionary;
  const [checkedOutObject, setcheckedOutObject] = useState<check_out | any>(
    intailcheckedOutObject
  );
  const { push } = useRouter();

  const handelSubmitOrder = () => {
    if (checkedOutObject.products.length) {
      setcheckedOutObject({ total: 0, products: [] });
      console.log("success order and empity cart");
      push("Order");
    }
  };

  return (
    <>
      {!checkedOutObject.products.length ? (
        <div>loading ...</div>
      ) : (
        <div
          className={`flex justify-between container gap-4 m-auto  ${
            locale === "ar" && "text-right"
          }`}
        >
          {/* Billing Details Form */}
          <div className="w-1/2 mr-8">
            <h2 className="text-xl font-semibold mb-4 text-center mt-4">
              {form.title}
            </h2>
            {/* {form inputs} */}
            <div className="flex flex-col   max-w-xl">
              <div className="mb-4 flex flex-col gap-1">
                <label
                  htmlFor="firstName"
                  className="block mb-1  text-color-text-2"
                >
                  {form.firstName}
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full p-1  border-none rounded focus:outline-none bg-slate-100 "
                />
              </div>
              <div className="mb-4 flex flex-col gap-1">
                <label
                  htmlFor="companyName"
                  className="block mb-1  text-color-text-2"
                >
                  {form.companyName}
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  className="w-full p-1  border-none rounded focus:outline-none bg-slate-100 "
                />
              </div>
              <div className="mb-4 flex flex-col gap-1">
                <label htmlFor="city" className="block mb-1  text-color-text-2">
                  {form.city}
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="w-full p-1  border-none rounded focus:outline-none bg-slate-100 "
                />
              </div>
              <div className="mb-4 flex flex-col gap-1">
                <label
                  htmlFor="streetAddress"
                  className="block mb-1  text-color-text-2"
                >
                  {form.streetAddress}
                </label>
                <input
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  className="w-full p-1  border-none rounded focus:outline-none bg-slate-100 "
                />
              </div>
              <div className="mb-4 flex flex-col gap-1">
                <label
                  htmlFor="apartment"
                  className="block mb-1  text-color-text-2"
                >
                  {form.apartment}
                </label>
                <input
                  type="text"
                  id="apartment"
                  name="apartment"
                  className="w-full p-1  border-none rounded focus:outline-none bg-slate-100 "
                />
              </div>
              <div className="mb-4 flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="block mb-1  text-color-text-2"
                >
                  {form.email}
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="w-full p-1  border-none rounded focus:outline-none bg-slate-100 "
                />
              </div>
              <div className="mb-4 flex  items-center gap-2 ">
                <input
                  type="checkbox"
                  id="daveData"
                  name="daveData"
                  className=" h-6 w-6  checked:bg-black  "
                />
                <label htmlFor="daveData" className="block mb-1  text-md">
                  {form.checkbox}
                </label>
              </div>
            </div>
          </div>
          {/* Price Section */}
          <div className="w-1/2 py-5 flex flex-col">
            {/* products */}
            {checkedOutObject.products ? (
              checkedOutObject.products.map((Product) => {
                return (
                  <div className="flex justify-between" key={Product.id}>
                    <div className="col flex gap-4">
                      <Image
                        src={Gambod}
                        height={60}
                        width={60}
                        alt="product image"
                      />
                      <span>{Product.name}</span>
                    </div>
                    <div className="col flex justify-between w-2/4">
                      <span> {Product.amount}</span>
                      <span> ${Product.price}</span>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>no Products</h1>
            )}
            <div
              className={`flex  justify-between ${
                locale === "ar" && " flex-row-reverse"
              }`}
            >
              <span className="block mb-1 text-sm">
                {priceSection.subtotal}
              </span>
              <span className="font-semibold">{checkedOutObject.total}</span>
              {/* Sample data, replace with actual subtotal */}
            </div>
            <div
              className={`flex  justify-between ${
                locale === "ar" && " flex-row-reverse"
              }`}
            >
              <span className="block mb-1 text-sm">
                {priceSection.shipping}
              </span>
            </div>
            <div
              className={`mb-4 flex flex-col   ${
                locale == "ar" && " items-end "
              }`}
            >
              <div
                className={`flex  justify-between  w-full ${
                  locale === "ar" && "flex-row-reverse"
                }`}
              >
                <div className="flex">
                  <input
                    type="radio"
                    id="paymentMethod"
                    name="paymentMethod"
                    value="bank"
                    className="mr-2"
                  />
                  <label htmlFor="paymentMethod" className="block mb-1 text-sm">
                    {priceSection.payment.bank}
                  </label>
                </div>
                <div className="flex">
                  <Image
                    src={visaCardIcon.src}
                    height={10}
                    width={40}
                    alt="visa card icon"
                  />
                  <Image
                    src={masterCardIcon.src}
                    height={10}
                    width={40}
                    alt="master card icon"
                  />
                </div>
              </div>
              <div className="flex  ">
                <input
                  type="radio"
                  id="paymentMethod"
                  name="paymentMethod"
                  value="bank"
                  className="mr-2"
                />
                <label htmlFor="paymentMethod" className="block mb-1 text-sm">
                  {priceSection.payment.cash}
                </label>
              </div>
            </div>
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              onClick={() => handelSubmitOrder()}
            >
              {priceSection.order}
            </button>
            <Link
              href="Cart"
              className="bg-blue-500 text-white px-6 py-2 w-40 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 m-auto text-center"
            >
              {cartTitle}
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Client;
