"use client";
import { TLanguages } from "@/shared/types";
import Link from "next/link";
import React from "react";

export const NotFoundClient = () => {
  const Content = {
    ar: {
      title: "404 غير موجود",
      description:
        "الصفحة التي زرتها غير موجودة. يمكنك العودة إلى الصفحة الرئيسية.",
      button: "العودة إلى الصفحة الرئيسية",
    },
    en: {
      title: "404 not found",
      description: "Your visited page not found. You may go home page.",
      button: "Back to home page",
    },
  };
  const Language = localStorage.getItem("lange");
  const CurrentContent = Content[Language as TLanguages];
  const { title, description, button } = CurrentContent;
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">{title}</h1>
      <p className="text-xl text-gray-600 mb-4">{description}</p>
      <Link href={`/${Language}`}>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          {button}
        </button>
      </Link>
    </div>
  );
};
