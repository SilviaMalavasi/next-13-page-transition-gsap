"use client";

import styles from "./header.module.scss";
import { usePathname } from "next/navigation";

export default function Header({ chooseUrl }) {
  const path = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/page1", label: "Page one" },
    { href: "/page2", label: "Page two" },
    { href: "/page3", label: "Page three" },
  ];
  return (
    <nav className={styles.menu}>
      <ul>
        {links.map((links) => (
          <li key={links.href} onClick={() => chooseUrl(links.href)}>
            {links.label}
            {links.href === path && <span className={styles.underline} />}
          </li>
        ))}
      </ul>
    </nav>
  );
}
