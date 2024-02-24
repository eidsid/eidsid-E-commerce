"use client";
import { useState } from "react";
import { ILangPropsToComponent, TLanguages } from "@/shared/types";
import { useRouter, usePathname } from "next/navigation";

export default function HeaderLangDropdown({ lang }: ILangPropsToComponent) {
  const [language, setLanguage] = useState<TLanguages>(lang);
  const pathname = usePathname();
  const { push } = useRouter();
  const handelChange = (e: { target: { value: string } }) => {
    setLanguage(e.target.value as TLanguages);
    push(
      `/${e.target.value as TLanguages}/${
        pathname.split("/").slice(2).join("/") || ""
      }`
    );
  };
  return (
    <select
      value={language}
      onChange={handelChange}
      className="cursor-pointer  bg-transparent text-lg"
    >
      <option value="en" className="  text-white  bg-black ">
        English
      </option>
      <option value="ar" className=" text-white bg-black rtl">
        عربي
      </option>
    </select>
  );
}
