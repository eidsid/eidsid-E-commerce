import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import qr from "@/public/images/qr.png";
import googlePlay from "@/public/images/googleplay.png";
import appStore from "@/public/images/appstore.jpg";
import Image from "next/image";
import { link } from "@/shared/types";

type props = {
  footerDectionary: {
    footerNav2: link[];
    footerNav1: link[];
    footerNav: link[];
    otherTexts: {
      subscribe: string;
      TenPersontOff: string;
      emailPlaceholder: string;
      downloadApp: string;
      saveNewUser: string;
      copyRight: string;
      support: string;
      account: string;
      quickLink: string;
    };
  };
  logo: string;
};
const Footer = ({ footerDectionary, logo }: props) => {
  const {
    subscribe,
    TenPersontOff,
    emailPlaceholder,
    downloadApp,
    saveNewUser,
    copyRight,
    support,
    account,
    quickLink,
  } = footerDectionary.otherTexts;
  return (
    <footer className="flex items-center  bg-black  text-white  text-xs p-8  flex-col gap-16">
      <div className="flex  gap-8 ">
        <ul className="flex flex-col  p-1  gap-2  ">
          <li className=" font-bold  text-lgs">{logo}</li>
          <li>{TenPersontOff}</li>
          <li>{subscribe}</li>
          <form className=" relative   bg-transparent border  ">
            <input
              type="email"
              name="email"
              id="email"
              placeholder={emailPlaceholder}
              className=" pr-8 bg-inherit focus:outline-none   p-2 pl-4"
            />
            <PaperAirplaneIcon className="absolute  top-2/4  right-0  w-5  -translate-y-1/2 font-bold" />
          </form>
        </ul>
        <ul className="flex flex-col  p-1  gap-2 ">
          <li className=" font-bold text-lg">{support}</li>
          {footerDectionary.footerNav.map(({ text, href }, index) => {
            return (
              <li key={index}>
                <Link href={`/${href}`}>{text}</Link>
              </li>
            );
          })}
        </ul>
        <ul className="flex flex-col  p-1  gap-2 ">
          <li className=" font-bold text-lg">{account}</li>

          {footerDectionary.footerNav1.map(({ text, href }, index) => {
            return (
              <li key={index}>
                <Link href={`${href}`}>{text}</Link>
              </li>
            );
          })}
        </ul>
        <ul className="flex flex-col  p-1  gap-2 ">
          <li className=" font-bold text-lg">{quickLink}</li>

          {footerDectionary.footerNav2.map(({ text, href }, index) => {
            return (
              <li key={index}>
                <Link href={`${href}`}>{text}</Link>
              </li>
            );
          })}
        </ul>
        <div className="otherTexts">
          <ul className="flex flex-col  p-1  gap-2 ">
            <li className="font-bold text-lg">{downloadApp}</li>
            <li className=" tex-xs opacity-60"> {saveNewUser}</li>
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
      <div className=" text-center  opacity-45">@ {copyRight}</div>
    </footer>
  );
};

export default Footer;
