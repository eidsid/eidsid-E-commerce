import { getLocaleInServer } from "@/shared/utils";
import Banner from "../components/banner/Index";
import Sidbar from "../components/sidebar";
import { getDict } from "../../../dictionaries/dictionaries";
import { headers } from "next/headers";
import FlashSales from "../components/FlashSales";
import Categories from "../components/Categories";
export default async function Home() {
  const Local = getLocaleInServer(headers);
  const dectionary: any = await getDict(Local);
  const flashSlaesDectionary = dectionary.pages.index.sales;
  const CategorieDectionary = dectionary.pages.index.category;
  const sideMenuDectionary = dectionary.pages.index.sideMenu;
  return (
    <div className="container  m-auto  ">
      <div className="  flex   justify-between p-4   mx-auto   ">
        <Sidbar sideMenu={sideMenuDectionary} />
        <Banner />
      </div>
      <FlashSales Local={Local} dic={flashSlaesDectionary} />
      <Categories Local={Local} dic={CategorieDectionary} />
    </div>
  );
}
