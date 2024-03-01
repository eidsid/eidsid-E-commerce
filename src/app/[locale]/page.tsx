import { getLocaleInServer } from "@/shared/utils";
import Banner from "../components/banner/Index";
import Sidbar from "../components/sidebar";
import { getDict } from "../../../dictionaries/dictionaries";
import { headers } from "next/headers";

export default async function Home() {
  const Local = getLocaleInServer(headers);
  const dectionary: any = await getDict(Local);

  return (
    <div>
      <div className=" container flex   w-screen p-4 ">
        <Sidbar links={dectionary.header.links} />
        <Banner />
      </div>
    </div>
  );
}
