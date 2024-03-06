import { getLocaleInServer } from "@/shared/utils";
import Banner from "../components/banner/Index";
import Sidbar from "../components/sidebar";
import { getDict } from "../../../dictionaries/dictionaries";
import { headers } from "next/headers";
import FlashSales from "../components/FlashSales";
export default async function Home() {
  const Local = getLocaleInServer(headers);
  const dectionary: any = await getDict(Local);

  return (
    <div>
      <div className=" container flex   justify-between p-4  max-w-screen-lg  mx-auto   ">
        <Sidbar sideMenu={dectionary.pages.index.sideMenu} />
        <Banner />
      </div>
      <FlashSales />
    </div>
  );
}
