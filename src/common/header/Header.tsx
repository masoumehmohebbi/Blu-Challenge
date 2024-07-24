import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className={`container ${styles.header}`}>
      <Link href="/auth" className="btn--primary">
        ورود به سامانه
      </Link>

      {/* menu items */}
      <ul className={styles.menu}>
        <li>
          <Link href="">صفحه اصلی</Link>
        </li>
        <li>
          <Link href="">انواع وام</Link>
        </li>
        <li>
          <Link href="">درباره ما</Link>
        </li>
      </ul>
      {/* menu logo */}
      <div>
        <Image src="/blu.svg" width={120} height={120} alt="blue-logo" />
      </div>
    </div>
  );
};

export default Header;
