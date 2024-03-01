import { IChildren } from "@/shared/types";
import Header from "../components/header";
import Footer from "../components/footer";
import { getLocaleInServer } from "@/shared/utils";
import { getDict } from "../../../dictionaries/dictionaries";
import { headers } from "next/headers";

export default async function layout({ children }: IChildren) {
  const Local = getLocaleInServer(headers);
  const dectionary = await getDict(Local);
  return (
    <>
      <Header HeaderDectionary={dectionary.header} Local={Local} />
      <main className="flex-grow bg-color-bg text-color-text-3 relative">
        {children}
      </main>
      <Footer
        footerDectionary={dectionary.footer}
        logo={dectionary.header.logo}
      />
    </>
  );
}
