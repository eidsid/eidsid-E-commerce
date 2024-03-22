import React from "react";
import Client from "./client";
import { getLocaleInServer } from "@/shared/utils";
import { getDict } from "../../../../dictionaries/dictionaries";
import { headers } from "next/headers";

const page = async () => {
  const Locale = getLocaleInServer(headers);
  const dectionary: any = await getDict(Locale);
  const accountDectionary = dectionary.pages.account;
  const removeTitleDectionary = dectionary.pages.removeTitle;
  accountDectionary.wishListProduct = {
    removeTitle: removeTitleDectionary,
  };
  return (
    <div>
      <Client dectionary={accountDectionary} locale={Locale} />
    </div>
  );
};

export default page;
