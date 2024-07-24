import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.menu}>
        <li>
          <Link href="">انواع وام</Link>
        </li>
        <li>
          <Link href="">درباره ما</Link>
        </li>
        <li>
          <Link href="">ورود به سامانه</Link>
        </li>
      </ul>

      <div>
        <Image src="/blu.svg" width={100} height={100} alt="blue-logo" />
      </div>
    </div>
  );
};

export default Header;
