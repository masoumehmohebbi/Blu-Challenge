"use client";
import React, { useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import Modal from "@/components/modal/Modal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={`container ${styles.header}`}>
        <Link href="/auth" className="btn--primary">
          ورود به سامانه
        </Link>

        {/* menu items */}
        <ul className={styles.menu}>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="" onClick={() => setIsOpen((prev) => !prev)}>
              لیست تسهیلات
            </Link>
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
      <Modal open={isOpen} onOpen={setIsOpen} />
    </>
  );
};

export default Header;
