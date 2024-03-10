"use client";
import React from "react";
import { TLanguages } from "@/shared/types";
import { useRouter } from "next/navigation";
type props = {
  dic: {
    title: string;
    email: string;
    resetButtin: string;
    home: string;
  };
  Local: TLanguages;
};
const Client = ({ dic, Local }: props) => {
  const { push } = useRouter();
  const { title, email, resetButtin, home } = dic;
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div
      className={`flex flex-col gap-2 justify-center items-center  ${
        Local === "ar" && "text-right"
      }`}
    >
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-8 text-center">{title}</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            {email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={email}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          {resetButtin}
        </button>
      </form>
      <button
        onClick={() => {
          push(`/${Local}/`);
        }}
      >
        {home}
      </button>
    </div>
  );
};

export default Client;
