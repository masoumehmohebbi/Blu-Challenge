"use client";
import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import Modal from "@/components/modal/Modal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const storedItem = localStorage.getItem("activeItem");
  const [activeItem, setActiveItem] = useState<number>(
    storedItem ? JSON.parse(storedItem) : 1
  );

  useEffect(() => {
    const storedActiveItem = storedItem ? JSON.parse(storedItem) : 1;
    setActiveItem(storedActiveItem);
  }, []);

  const activeItemHandler = (index: number) => {
    setActiveItem(index);
    localStorage.setItem("activeItem", JSON.stringify(index));
  };

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
            <Link
              onClick={() => activeItemHandler(1)}
              className={activeItem === 1 ? styles.activeItem : ""}
              href="/"
            >
              خانه
            </Link>
          </li>
          <li>
            <Link
              className={activeItem === 2 ? styles.activeItem : ""}
              href=""
              onClick={() => {
                setIsOpen((prev) => !prev);
                activeItemHandler(2);
              }}
            >
              لیست تسهیلات
            </Link>
          </li>
          <li>
            <Link
              onClick={() => activeItemHandler(3)}
              className={activeItem === 3 ? styles.activeItem : ""}
              href="/about"
            >
              درباره ما
            </Link>
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
