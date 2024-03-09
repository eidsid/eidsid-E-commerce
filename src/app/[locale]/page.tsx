import { getLocaleInServer } from "@/shared/utils";
import Banner from "../components/banner/Index";
import Sidbar from "../components/sidebar";
import { getDict } from "../../../dictionaries/dictionaries";
import { headers } from "next/headers";
import FlashSales from "../components/FlashSales";
import Categories from "../components/Categories";
import BestSales from "../components/bestSales";
import SingleProductBanner from "../components/SingleProductBanner";
export default async function Home() {
  const Local = getLocaleInServer(headers);
  const dectionary: any = await getDict(Local);
  const flashSlaesDectionary = dectionary.pages.index.sales;
  const CategorieDectionary = dectionary.pages.index.category;
  const sideMenuDectionary = dectionary.pages.index.sideMenu;
  const BestSalesDectionary = dectionary.pages.index.bestSelling;
  const singProductDectionary = dectionary.pages.index.banner;
  return (
    <div className="container  m-auto  ">
      <div className="  flex   justify-between p-4   mx-auto   ">
        <Sidbar sideMenu={sideMenuDectionary} />
        <Banner />
      </div>
      <div className="flex flex-col gap-8">
        <FlashSales Local={Local} dic={flashSlaesDectionary} />
        <Categories Local={Local} dic={CategorieDectionary} />
        <BestSales Local={Local} dic={BestSalesDectionary} />
        <SingleProductBanner Local={Local} dic={singProductDectionary} />
      </div>
    </div>
  );
}
