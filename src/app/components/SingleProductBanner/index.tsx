import { TLanguages } from "@/shared/types";
import React from "react";
import MusicImage from "@/public/images/home/bannermicro.webp";
import Image from "next/image";
import Link from "next/link";
import SecondaryTimeShow from "../timeShow/secondaryTimeShow";
type props = {
  Local: TLanguages;
  dic: {
    title: string;
    description: string;
    experience: string;
    days: string;
    minutes: string;
    seconds: string;
    hours: string;
    buy: string;
  };
};

const SpacialProduct = {
  id: "fdkokjmgfjmgkgf",
  timedata: { days: 5, hours: 4, minutes: 50, secends: 50 },
};

const SingleProductBanner = ({ Local, dic }: props) => {
  const { title, description, experience, buy, ...timeTransation } = dic;
  const {
    timedata: { days, hours, minutes, secends },
  } = SpacialProduct;
  //timer
  const currentDate = new Date();
  // Set the time for the end of the day
  const endOfDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() + 3,
    23,
    19,
    56
  );

  const endDay = new Date(
    endOfDay.getTime() + days * hours * minutes * secends * 1000
  );
  return (
    <div
      className={`flex items-center justify-between m-auto p-4   min-h-96  w-full  max-w-6xl bg-black mb-4  ${
        Local === "ar" && "flex-row-reverse  text-right  "
      }`}
    >
      <div className="flex flex-col justify-between  w-2/4   h-60 text-white ">
        <span className="text-green-500  text-sm  ">{title}</span>
        <span className=" text-4xl first-letter:capitalize ">
          {description}
        </span>
        <SecondaryTimeShow date={endDay} dict={timeTransation} />
        <div>
          <Link
            href={`/products/${SpacialProduct.id}`}
            className="bg-green-400 py-2 px-6 w-fit rounded-sm"
          >
            {buy}
          </Link>
        </div>
      </div>
      <div className="  h-3/4  w-2/4    ">
        <Image
          height={200}
          width={400}
          src={MusicImage.src}
          alt={`${description} image`}
          className=" max-h-96 max-w-full"
        />
      </div>
    </div>
  );
};

export default SingleProductBanner;
