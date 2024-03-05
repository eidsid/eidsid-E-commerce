"use client";
import { useState } from "react";
import { ILangPropsToComponent, TLanguages } from "@/shared/types";
import { useRouter, usePathname } from "next/navigation";

export default function HeaderLangDropdown({ lang }: ILangPropsToComponent) {
  const [language, setLanguage] = useState<TLanguages>(lang);
  const pathname = usePathname();
  const { push } = useRouter();
  const HandelLanguageChange = (e: any) => {
    let lange = e.target.value as TLanguages;
    setLanguage(lange);
    push(
      `/${e.target.value as TLanguages}/${
        pathname.split("/").slice(2).join("/") || ""
      }`
    );
    localStorage.setItem("lange", lange);
  };

  return (
    <select
      value={language}
      onChange={HandelLanguageChange}
      className="cursor-pointer bg-black"
    >
      <option value="en" className="bg-color-bg text-color-text-3">
        English
      </option>
      <option value="ar" className=" text-white bg-black rtl">
        عربي
      </option>
    </select>
  );
}
