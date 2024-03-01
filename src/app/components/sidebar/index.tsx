import Link from "next/link";
import { getDict } from "../../../../dictionaries/dictionaries";
import { getLocaleInServer } from "@/shared/utils";
import { headers } from "next/headers";
type props = {
  links: { text: string; href: string }[];
};
export default async function SideBar({ links }: props) {
  return (
    <aside className="text-color-text-3 text-lg z-10 flex flex-col items-start gap-4 mt-10 pr-4">
      {links.map(({ text, href }, index) => {
        return (
          <Link href={href} prefetch={false} key={index}>
            {text}
          </Link>
        );
      })}
    </aside>
  );
}
