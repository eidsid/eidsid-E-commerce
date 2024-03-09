import React from "react";
import delevery from "@/public/icons/services/delivery.svg";
import safety from "@/public/icons/services/safety.svg";
import support from "@/public/icons/services/support.svg";
import Image from "next/image";
type props = {
  dic: { title: string; subtitle: string; image: string }[];
};

const Services = ({ dic }: props) => {
  const iconComponents: { [key in string]: JSX.Element } = {
    safety: (
      <Image src={safety.src} height={100} width={100} alt={`safty image`} />
    ),
    delivery: (
      <Image
        src={delevery.src}
        height={100}
        width={100}
        alt={`delivery image`}
      />
    ),
    support: (
      <Image src={support.src} height={100} width={100} alt={`support image`} />
    ),
  };
  return (
    <div className=" flex gap-4 justify-between  w-4/5  mx-auto my-8">
      {dic.map(({ title, subtitle, image }) => {
        return (
          <div key={title} className="flex flex-col  items-center gap-1 my-4  ">
            {iconComponents[image]}
            <div className="info ">
              <h1 className=" font-bold text-sm">{title}</h1>
              <p className=" text-xs  scale-90">{subtitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
