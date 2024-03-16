import React from "react";
import Client from "./Client";
import { getLocaleInServer } from "@/shared/utils";
import { headers } from "next/headers";
import { getDict } from "../../../../dictionaries/dictionaries";

const Checkout = async () => {
  const Local = getLocaleInServer(headers);
  const dectionary: any = await getDict(Local);
  const CheckoutDectionary = dectionary.pages.cart.checkOut;
  const cartTitle = dectionary.pages.cart.title;
  CheckoutDectionary.cartTitle = cartTitle;
  return (
    <div>
      <Client dectionary={CheckoutDectionary} locale={Local} />
    </div>
  );
};

export default Checkout;
