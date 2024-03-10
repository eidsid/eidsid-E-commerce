"use client";
import React from "react";
import Link from "next/link";
import { TLanguages } from "@/shared/types";
import { useRouter } from "next/navigation";
type props = {
  dic: {
    title: string;
    subtitle: string;
    inputs: {
      name: string;
      email: string;
      phoneNumber: string;
      password: string;
    };
    createAcc: string;
    signGoogle: string;
    haveAccount: string;
    login: string;
  };
  Local: TLanguages;
};
const Client = ({ dic, Local }: props) => {
  const {
    title,
    subtitle,
    inputs: { name, email, phoneNumber, password },
    createAcc,
    signGoogle,
    haveAccount,
    login,
  } = dic;
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission
  };
  const { push } = useRouter();
  return (
    <div
      className={`flex flex-col justify-center items-center ${
        Local === "ar" && " text-right"
      }`}
    >
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-8 text-center">{title}</h2>
        <h2 className="text-xl font-bold mb-8">{subtitle}</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            {name}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            {email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-semibold mb-2"
          >
            {phoneNumber}
          </label>
          <input
            type="input"
            id="phoneNumber"
            name="phoneNumber"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-semibold mb-2"
          >
            {password}
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          {createAcc}
        </button>

        <button
          onClick={() => {
            push(`/${Local}/Login`);
          }}
        >
          <span>{haveAccount}</span>
          <span> {login} </span>
        </button>
      </form>
      <button>{signGoogle}</button>
    </div>
  );
};

export default Client;
