import React from "react";
import Link from "next/link";
import HeaderLangDropdown from "./changeLange";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { TLanguages, link } from "@/shared/types";
import AccountDropdown from "../accountDropDownMenu/AccountDropdown";
import HeaderLink from "./HeaderLink";
type props = {
  HeaderDectionary: {
    links: { text: string; href: string }[];
    logo: string;
    topHeader: { text: string; href: string };
    searchPlaceholder: string;
    accountDropDown: {
      manageAccount: link;
      MyOrder: link;
      logout: string;
    };
    login: string;
  };
  Local: TLanguages;
};

const Header = async ({ HeaderDectionary, Local }: props) => {
  const Header = HeaderDectionary;
  const linkes = Header.links;
  const logo = Header.logo;
  const AccountTransation = Header.accountDropDown;
  let login = true;
  return (
    <header className="  shadow">
      <section className=" bg-black text-white text-center   p-2 flex justify-evenly  text-sm">
        <div className="left flex gap-3">
          <span>{Header.topHeader.text}</span>
          <a href={Header.topHeader.href} className=" underline">
            {Header.topHeader.href}
          </a>
        </div>
        <div className="right">
          <HeaderLangDropdown lang={Local} />
        </div>
      </section>
      <nav className="flex  gap-4  p-4 border justify-evenly ">
        <div className="log text-lg">{logo}</div>
        <ul className="flex gap-4  ">
          {linkes.map(({ text, href }, index) => (
            <li key={index}>
              <HeaderLink text={text} href={href} />
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
              placeholder={Header.searchPlaceholder}
              className=" pr-8 bg-inherit focus:outline-none   p-2 pl-4"
            />
          </form>
          <ul className="flex gap-4">
            <li>
              <Link href={`/${Local}/WishList`}>
                <HeartIcon height={25} width={25} className=" cursor-pointer" />
              </Link>
            </li>
            <li>
              <Link href={`/${Local}/Cart`}>
                <ShoppingCartIcon
                  height={25}
                  width={25}
                  className=" cursor-pointer"
                />
              </Link>
            </li>
            {login ? (
              <AccountDropdown
                AccountTransation={AccountTransation}
                locale={Local}
              />
            ) : (
              <HeaderLink text={Header.login} href="Account" />
            )}
          </ul>
        </section>
      </nav>
    </header>
  );
};

export default Header;
