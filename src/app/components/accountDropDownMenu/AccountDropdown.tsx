"use client";
import { link } from "@/shared/types";
import {
  ArrowLeftEndOnRectangleIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import HeaderLink from "../header/HeaderLink";
type props = {
  AccountTransation: {
    manageAccount: link;
    MyOrder: link;
    logout: string;
  };
  locale: string;
};
const AccountDropdown = ({ AccountTransation, locale }: props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { manageAccount, MyOrder, logout } = AccountTransation;
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log("eid");
  };

  return (
    <li className="relative group ">
      <UserIcon
        height={30}
        width={30}
        onClick={toggleDropdown}
        className="hover:bg-red-500 cursor-pointer hover:text-white rounded-full p-1"
      />
      <ul
        className={`absolute top-10  -translate-x-full z-10 bg-gradient-to-l  ${
          isOpen ? "block" : "hidden"
        } bg-black text-white p-4   min-w-60`}
      >
        <li className="px-4 py-2 cursor-pointer hover:bg-white hover:text-black rounded-sm flex gap-1 items-center">
          <UserIcon height={20} width={20} />

          <HeaderLink text={manageAccount.text} href={manageAccount.href} />
        </li>
        <li className="px-4 py-2 cursor-pointer hover:bg-white hover:text-black rounded-sm flex gap-1 items-center">
          <ShoppingBagIcon height={20} width={20} />
          <HeaderLink text={MyOrder.text} href={MyOrder.href} />
        </li>
        <li className="px-4 py-2 cursor-pointer hover:bg-white hover:text-black rounded-sm flex gap-1 items-center">
          <ArrowLeftEndOnRectangleIcon height={20} width={20} />
          {logout}
        </li>
      </ul>
    </li>
  );
};

export default AccountDropdown;
