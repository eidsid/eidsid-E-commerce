import React from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import HeaderLangDropdown from "./changeLange";
import { TLanguages } from "@/shared/types";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { headers } from "next/headers";

const Header = () => {
  const logo = useTranslations("header");
  const topHeaderT = useTranslations("header.topHeader");
  const linkesT = useTranslations("header.links");
  const searchPlaceholder = useTranslations("header");
  const linkes = ["home", "about", "contact", "signup"] as const;
  const Local = useLocale();

  return (
    <header className=" max-lg  shadow">
      <section className=" topHeader bg-black text-white text-center   p-2 flex justify-evenly  text-sm">
        <div className="left flex gap-3">
          <span>{topHeaderT("text")}</span>
          <a href={`${Local}/${topHeaderT("href")}`} className=" underline">
            {topHeaderT("href")}
          </a>
        </div>
        <div className="right">
          <HeaderLangDropdown lang={Local as TLanguages} />
        </div>
      </section>
      <nav className="flex  gap-4  p-4 border justify-evenly">
        <div className="log text-lg">{logo("logo")}</div>
        <ul className="flex gap-4  ">
          {linkes.map((link, index) => (
            <li key={index}>
              <Link
                href={`${Local}/${linkesT(`${link}.href`)}`}
                className="transition-all py-2 px-4   active:bg-white active:text-black rounded-2xl hover:bg-color-text-2-hover hover:text-white"
              >
                {linkesT(`${link}.text`)}
              </Link>
            </li>
          ))}
        </ul>

        <section className="flex gap-4">
          <form className=" relative   bg-slate-200">
            <MagnifyingGlassIcon
              height={18}
              width={18}
              className="absolute  top-2/4  right-0  w-5  -translate-y-1/2 font-bold"
            />
            <input
              type="search"
              name="search"
              id="search"
              placeholder={searchPlaceholder("searchPlaceholder")}
              className=" pr-8 bg-inherit focus:outline-none   p-2 pl-4"
            />
          </form>
          <ul className="flex gap-4">
            <li>
              <HeartIcon height={25} width={25} className=" cursor-pointer" />
            </li>
            <li>
              <ShoppingCartIcon
                height={25}
                width={25}
                className=" cursor-pointer"
              />
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
};

export default Header;
