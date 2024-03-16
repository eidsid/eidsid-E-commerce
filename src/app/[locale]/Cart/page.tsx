import React from "react";
import Client from "./Client";
import { getLocaleInServer } from "@/shared/utils";
import { headers } from "next/headers";
import { getDict } from "../../../../dictionaries/dictionaries";

const Cart = async () => {
  const Local = getLocaleInServer(headers);
  const dectionary: any = await getDict(Local);
  const cartDectionary = dectionary.pages.cart;
  const removeTitleDectionary = dectionary.pages.removeTitle;
  cartDectionary.removeTitle = removeTitleDectionary;
  return (
    <div>
      <Client dectionary={cartDectionary} locale={Local} />
    </div>
  );
};

export default Cart;
