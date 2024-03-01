"use client";
import { useState } from "react";
import { ILangPropsToComponent, TLanguages } from "@/shared/types";
import { useRouter, usePathname } from "next/navigation";

export default function HeaderLangDropdown({ lang }: ILangPropsToComponent) {
  const [language, setLanguage] = useState<TLanguages>(lang);
  const pathname = usePathname();
  const { push } = useRouter();

  return (
    <select
      value={language}
      onChange={(e) => {
        setLanguage(e.target.value as TLanguages);
        push(
          `/${e.target.value as TLanguages}/${
            pathname.split("/").slice(2).join("/") || ""
          }`
        );
      }}
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
