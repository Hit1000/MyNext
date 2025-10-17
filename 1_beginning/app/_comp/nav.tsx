"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
function Nav() {
  const list = [
    { name: "Home", href: "/" },
    { name: "Contacts", href: "/contacts" },
    { name: "Products", href: "/products" },
    { name: "Docs", href: "/docs" },
    { name: "Articles", href: "/articles" },
  ];
  const pathname = usePathname();
  return (
    <div>
      {list.map((item) => {
        const isActive =
          item.href === pathname ||
          (pathname.startsWith(item.href) && item.href !== "/");
        return (
          <Link
            key={item.href}
            className={
              isActive ? "text-blue-700 font-bold mr-4" : " text-blue-300 mr-4"
            }
            href={item.href}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}

export default Nav;
