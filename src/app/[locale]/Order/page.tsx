import { getLocaleInServer } from "@/shared/utils";
import { headers } from "next/headers";
import React from "react";
import { getDict } from "../../../../dictionaries/dictionaries";
import Client from "./client";

const OrderComponent = async () => {
  const Local = getLocaleInServer(headers);
  const dectionary: any = await getDict(Local);
  const orederCompoleteDectionary = dectionary.pages.index.ordersuccess;

  return <Client dic={orederCompoleteDectionary} local={Local} />;
};

export default OrderComponent;
