import "server-only";
import { TLanguages } from "@/shared/types";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  ar: () => import("./ar.json").then((module) => module.default),
};

export const getDict = async (locale: TLanguages) => {
  try {
    return dictionaries[locale]();
  } catch (error) {
    return dictionaries.en();
  }
};
