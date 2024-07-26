"use client";
import React, { useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import Modal from "@/components/modal/Modal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={`container ${styles.header}`}>
        <Link href="/auth" className="btn--primary">
          ورود&nbsp;
          <span className={styles.loginLink}> به سامانه </span>
        </Link>

        {/* menu items */}
        <ul className={styles.menu}>
          <li>
            <Link href="/">خانه</Link>
          </li>
          <li>
            <Link href="" onClick={() => setIsOpen((prev) => !prev)}>
              لیست تسهیلات
            </Link>
          </li>
          <li>
            <Link href="/about">درباره ما</Link>
          </li>
        </ul>
        {/* menu logo */}
        <div className={styles.logo__wrapper}>
          <img src="/blu.svg" alt="blu-logo" />
        </div>
      </div>
      <Modal open={isOpen} onOpen={setIsOpen} />
    </>
  );
};

export default Header;
