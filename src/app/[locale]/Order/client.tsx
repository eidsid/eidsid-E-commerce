"use client";
import { TLanguages } from "@/shared/types";
import Link from "next/link";
import React from "react";
type dictionaryType = {
  title: string;
  description: string;
  toProductsBtn: string;
};
const Client = ({ local, dic }: { local: TLanguages; dic: dictionaryType }) => {
  const { title, description, toProductsBtn } = dic;
  return (
    <div
      className={`bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8${
        local === "ar" && "text-right"
      }`}
    >
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h1
            className={`text-2xl font-semibold text-gray-800 ${
              local === "ar" && "text-right"
            }`}
          >
            {title}
          </h1>
          <p
            className={`max-w-2xl text-sm text-gray-500  m-4 ${
              local === "ar" && "text-right"
            }`}
          >
            {description}
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          {/* Display order details here, such as product name, price, etc. */}
        </div>
        <div className="px-4 py-4 bg-gray-50 sm:px-6 flex justify-end">
          <Link
            href={`/products`}
            type="button"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {toProductsBtn}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Client;
