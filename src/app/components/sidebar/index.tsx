import Link from "next/link";
import Arrow from "../buttons/Arrow";
type sideMenulink = { href: string; name: string };
type sideMenuType = {
  sideMenu: {
    plainMenu: sideMenulink[];
    otherMenu: {
      menuItems: sideMenulink[];
      menuName: string;
    }[];
  };
};
export default function SideBar({ sideMenu }: sideMenuType) {
  const { plainMenu, otherMenu } = sideMenu;
  return (
    <aside className="text-color-text-3 text-lg z-10 flex flex-col items-start  gap-2 mt-10 pr-4  ">
      {otherMenu.map(({ menuItems, menuName }) => {
        return (
          <ul key={menuName}>
            <li className="relative flex items-center min-w-44 gap-1 cursor-pointer group">
              <h2>{menuName}</h2>
              <Arrow direction="left" />
              <ul className=" z-100 hidden absolute  left-full  p-1  rounded top-0 bg-white shadow-md   group-hover:flex flex-wrap    justify-center  w-600 gap-4 ">
                {menuItems.map(({ href, name }) => {
                  return (
                    <li
                      key={name}
                      className=" text-center  mb-1  hover:bg-black hover:text-white   w-36 rounded-3xl px-4 py-2  "
                    >
                      <Link href={href} prefetch={false}>
                        {name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        );
      })}
      {plainMenu.map(({ name, href }) => {
        return (
          <Link href={href} prefetch={false} key={name}>
            {name}
          </Link>
        );
      })}
    </aside>
  );
}
