import { getLocaleInServer } from "@/shared/utils";
import { getDict } from "../../../../dictionaries/dictionaries";
import Client from "./client";
import { headers } from "next/headers";

const WishlistPage = async () => {
  const Locale = getLocaleInServer(headers);
  const dic = await getDict(Locale);
  const dectionary = dic.pages.wishlist;
  const removeTitleDic = dic.pages.removeTitle;

  return (
    <Client
      dic={{ ...dectionary, removeTitle: removeTitleDic }}
      Locale={Locale}
    />
  );
};

export default WishlistPage;
