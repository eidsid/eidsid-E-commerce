import Image, { StaticImageData } from "next/image";
import React from "react";
import aboutImage from "@/public/images/about/employee-1.webp";
import { getDict } from "../../../../dictionaries/dictionaries";
import { getLocaleInServer } from "@/shared/utils";
import { headers } from "next/headers";
import employee1Image from "@/public/images/about/employee-1.webp";
import employee2Image from "@/public/images/about/employee-2.webp";
import employee3Image from "@/public/images/about/employee-3.webp";
// icons
import instagram from "@/public/icons/socailmedia/38-instagram.svg";
import twitter from "@/public/icons/socailmedia/05-twitter.svg";
import linkedin from "@/public/icons/socailmedia/11-linkedin.svg";
import DeliveryIcon from "@/public/icons/services/delivery.svg";
import saftyIcon from "@/public/icons/services/safety.svg";
import supportIcon from "@/public/icons/services/support.svg";
type aboutDectionary = {
  section1: {
    title: string;
    text1: string;
    text2: string;
  };
  section2: {
    aboutCards: { title: string; subtitle: string }[];
  };
  section3: {
    title: string;
    employeeCards: {
      href: {
        instagram: string;
        linkedin: string;
        twitter: string;
      };
      image: string;
      name: string;
      status: string;
    }[];
  };
  section4: {
    services: { title: string; subtitle: string; image: string }[];
  };
};
const socialIcons = {
  instagram: instagram,
  twitter: twitter,
  linkedin: linkedin,
};
const page = async () => {
  const Local = getLocaleInServer(headers);
  const dectionary: any = await getDict(Local);
  const aboutDectionary = dectionary.pages.aboutUs;

  type EmployeeKey = "1" | "2" | "3";
  const employessImges: Record<EmployeeKey, StaticImageData> = {
    "1": employee1Image,
    "2": employee2Image,
    "3": employee3Image,
  };

  type ServiceKey = "delivery" | "support" | "safety";
  const ServicesIcons: Record<ServiceKey, StaticImageData> = {
    delivery: DeliveryIcon,
    support: saftyIcon,
    safety: supportIcon,
  };

  const {
    section1,
    section2: { aboutCards },
    section3,
    section4,
  } = aboutDectionary as aboutDectionary;
  return (
    <div className=" container  m-auto">
      {/* banner */}
      <div
        className={`flex  justify-between  min-h-96 my-4   max-w-5xl  m-auto ${
          Local === "ar" && " flex-row-reverse text-right"
        }`}
      >
        <div className="left w-2/4 flex flex-col justify-center  p-8 gap-4  items-center">
          <h2 className="text-4xl  font-medium m-4">{section1.title}</h2>
          <p className=" text-sm w-9/12 text-start font-bold   ">
            {section1.text1}
          </p>
          <p className=" text-sm w-9/12 text-start font-bold ">
            {section1.text2}
          </p>
        </div>
        <div className="right  w-96 relative bg-pink-400  ">
          <Image src={aboutImage.src} alt="about images" fill className="" />
        </div>
      </div>
      {/* atchevements */}
      <div className=" flex  gap-4 p-1  justify-center">
        {aboutCards.map((card) => {
          return (
            <div
              key={card.title}
              className="flex flex-col items-center justify-center border h-36 w-60 gap-4 hover:bg-red-600 hover:text-white transition-all"
            >
              <span className=" font-extrabold">{card.title}</span>
              <span>{card.subtitle}</span>
            </div>
          );
        })}
      </div>
      {/* employees */}
      <div className="flex flex-col">
        <h2 className=" font-extrabold text-4xl text-center  underline  leading-loose    underline-offset-8">
          {section3.title}
        </h2>
        <div className="flex  justify-center">
          {section3.employeeCards.map((employee, index) => (
            <div
              key={employee.name}
              className="card  h-96 w-60  bg-white rounded-lg shadow-md p-4"
            >
              <div className="bg-slate-200 h-60 relative overflow-hidden rounded-t-lg">
                <Image
                  src={employessImges[employee.image as EmployeeKey]}
                  alt={`employee ${employee.name} image`}
                  fill
                  className=" hover:scale-125"
                />
              </div>
              <h1 className="text-xl font-semibold mt-2">{employee.name}</h1>
              <p className="text-gray-600">{employee.status}</p>
              <div className="social flex gap-2 mt-2">
                <a href={employee.href.instagram}>
                  <Image
                    src={socialIcons.instagram}
                    height={30}
                    width={30}
                    className="hover:scale-125"
                    alt="employee instagram link"
                  />
                </a>
                <a href={employee.href.linkedin}>
                  <Image
                    src={socialIcons.linkedin}
                    height={30}
                    width={30}
                    className="hover:scale-125"
                    alt="employee linkedin link"
                  />
                </a>
                <a href={employee.href.twitter}>
                  <Image
                    src={socialIcons.twitter}
                    height={30}
                    width={30}
                    className="hover:scale-125"
                    alt="employee twitter link"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* services */}
      <div className="flex gap-4 justify-center py-4">
        {section4.services.map(({ title, subtitle, image }) => {
          return (
            <div key={title} className="p-4 flex flex-col  items-center gap-2">
              <Image
                src={ServicesIcons[image as ServiceKey]}
                height={60}
                width={60}
                alt={`${image} icon `}
              />
              <h2 className="  font-extrabold text-lg">{title}</h2>
              <p className="text-sm opacity-85">{subtitle}</p>
            </div>
          );
        })}
      </div>
      <div className="flex">
        <div className="card"></div>
      </div>
    </div>
  );
};

export default page;
