import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import qr from "@/public/images/qr.png";
import googlePlay from "@/public/images/googleplay.png";
import appStore from "@/public/images/appstore.jpg";
import Image from "next/image";
const Footer = () => {
  const footerNav1 = useTranslations("footer.footerNav1");
  const footerNav2 = useTranslations("footer.footerNav2");
  const otherTexts = useTranslations("footer.otherTexts");
  const logo = useTranslations("header");

  const footerNavLinkes = ["link1", "link2", "link3", "link4"] as const;
  const Local = useLocale();

  return (
    <footer className=" flex-col   bg-black  text-white gap-8   text-xs p-8 flex flex-col gap-16">
      <div className="flex  gap-8 ">
        <ul className="flex flex-col  p-1  gap-2  ">
          <li className=" font-bold  text-lgs">{logo("logo")}</li>
          <li>{otherTexts("10%Off")}</li>
          <li>{otherTexts("subscribe")}</li>
          <form className=" relative   bg-transparent border  ">
            <input
              type="email"
              name="email"
              id="email"
              placeholder={otherTexts("emailPlaceholder")}
              className=" pr-8 bg-inherit focus:outline-none   p-2 pl-4"
            />
            <PaperAirplaneIcon className="absolute  top-2/4  right-0  w-5  -translate-y-1/2 font-bold" />
          </form>
        </ul>
        <ul className="flex flex-col  p-1  gap-2 ">
          {footerNavLinkes.map((link, index) => {
            return (
              <li key={index}>
                <Link href={`${Local}/${footerNav1(`${link}.href`)}`}>
                  {footerNav1(`${link}.text`)}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="flex flex-col  p-1  gap-2 ">
          {footerNavLinkes.map((link, index) => {
            return (
              <li key={index}>
                <Link href={`${Local}/${footerNav2(`${link}.href`)}`}>
                  {footerNav2(`${link}.text`)}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="otherTexts">
          <ul className="flex flex-col  p-1  gap-2 ">
            <li>{otherTexts("downloadApp")}</li>
            <li className=" tex-xs opacity-60"> {otherTexts("saveNewUser")}</li>
            <div className="grid grid-cols-2 gap-1 items-end">
              <div className="col">
                <Image src={qr.src} height={100} width={100} alt="qr code" />
              </div>
              <div className="col">
                <Image
                  src={googlePlay.src}
                  height={60}
                  width={60}
                  alt="googleplay icon"
                />
                <Image
                  src={appStore.src}
                  height={60}
                  width={60}
                  alt="appstore icon"
                />
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div className=" text-center  opacity-45">
        {" "}
        @ {otherTexts("copyRight")}
      </div>
    </footer>
  );
};

export default Footer;
