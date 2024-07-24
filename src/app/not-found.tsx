import Link from "next/link";
import React from "react";
import styles from "./not-found.module.css";
import { XMarkIcon } from "@heroicons/react/24/outline";

const NotFound = () => {
  return (
    <div className={`container ${styles.main}`}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <p>صفحه مورد نظر یافت نشد.</p>
          <XMarkIcon className={styles.icon} />
        </div>
        <Link href="/" className="btn--primary">
          برگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
