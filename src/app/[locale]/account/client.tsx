"use client";
import React, { useState } from "react";
import AccountSection from "./Content/AccountSection";
import { OrderSection } from "./Content/OrderSection";
import WhishLidtSection from "./Content/WhishLidtSection";
import { TLanguages } from "@/shared/types";

type props = {
  dectionary: {
    nav: { text: string; href: string }[];
    ChangePasswordTitle: string;
    yourProfile: string;
    fristName: string;
    LastName: string;
    currentpassword: string;
    newpassword: string;
    confirempassword: string;
    city: string;
    streetAddress: string;
    apprtment: string;
    conpanyName: string;
    email: string;
    phoneNumber: string;
    savebtn: string;
    Cancelbtn: string;
  };
  locale: TLanguages;
};
const Client = ({ dectionary, locale }: props) => {
  const [pageContent, setPageContent] = useState<string>("account");
  const { nav, ...AccountSectionDectionary } = dectionary;
  const handelPageContent = (PageContent: string) => {
    setPageContent(PageContent);
  };

  return (
    <div
      className={`container flex gap-8  m-auto  ${
        locale === "ar" && "text-right flex-row-reverse "
      }   min-h-96`}
    >
      {/* nav */}
      <div className="flex flex-col  font-bold self-center gap-4 w-1/5">
        {nav.map(({ text, href }, index) => {
          return (
            <button
              onClick={() => handelPageContent(href)}
              key={index}
              className="hover:bg-slate-900 hover:text-white py-2 px-4 rounded-sm w-fit border  min-w-44 transition-all  duration-500"
            >
              {text}
            </button>
          );
        })}
      </div>
      {/* content */}

      <div className="w-4/5">
        {pageContent === "account" && (
          <AccountSection
            dictionary={AccountSectionDectionary}
            locale={locale}
          />
        )}
        {pageContent === "orders" && (
          <OrderSection title={nav[1].text} locale={locale} />
        )}
        {pageContent === "Wishlist" && (
          <WhishLidtSection title={nav[2].text} locale={locale} />
        )}
      </div>
    </div>
  );
};

export default Client;
