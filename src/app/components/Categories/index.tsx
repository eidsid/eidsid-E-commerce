import React from "react";
import { getDict } from "../../../../dictionaries/dictionaries";
import { getLocaleInServer } from "@/shared/utils";
import { headers } from "next/headers";
import {
  CalculatorIcon,
  CameraIcon,
  ClockIcon,
  ComputerDesktopIcon,
  PhoneIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
const Categories = async () => {
  const Local = getLocaleInServer(headers);
  const dectionary: any = await getDict(Local);
  type catogryDescriptionType = {
    title: string;
    description: string;
    categories: { title: string; icon: string; href: string }[];
  };
  const Categorydescription: catogryDescriptionType =
    dectionary.pages.index.category;
  const { title, description, categories } = Categorydescription;
  const iconComponents: { [key in string]: JSX.Element } = {
    CameraIcon: <CameraIcon height={100} width={100} />,
    ComputerIcon: <ComputerDesktopIcon height={100} width={100} />,
    GamingIcon: <PuzzlePieceIcon height={100} width={100} />,
    PhoneIcon: <PhoneIcon height={100} width={100} />,
    WatchIcon: <ClockIcon height={100} width={100} />,
  };

  return (
    <section className="flex flex-col  gap-4 ">
      <section className=" flex flex-col gap-8 pl-4   ">
        <div
          className={`col flex gap-4 items-center ${
            Local == "ar" && " flex-row-reverse"
          }`}
        >
          <span className=" h-10 w-4 bg-red-600 rounded-2xl "></span>
          <span className="  text-sm font-bold  text-red-600">{title}</span>
        </div>
        <div className={`flex gap-4  ${Local == "ar" && " flex-row-reverse"}`}>
          <h2 className=" font-bold  text-3xl  min-w-fit  py-5 first-letter:capitalize ">
            {description}
          </h2>
        </div>
      </section>
      <section className="flex overflow-x-scroll gap-4  p-4 justify-center">
        {categories.map(({ title, icon, href }, index) => {
          return (
            <div key={index}>
              <Link href={`products/${href}`}>
                {iconComponents[icon]}
                <span>{title}</span>
              </Link>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Categories;
