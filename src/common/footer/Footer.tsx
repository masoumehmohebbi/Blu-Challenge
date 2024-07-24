import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.main}>
      <div className={styles.content}>
        <span>ساخته شده توسط</span>
        <Link href="https://github.com/masoumehmohebbi" className={styles.link}>
          م.م
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
