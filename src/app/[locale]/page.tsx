import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("header");

  return (
    <div>
      <h1 className="text-4xl mb-4 font-semibold">{t("topHeader.text")}</h1>
      <p>{t("topHeader.href")}</p>
    </div>
  );
}
