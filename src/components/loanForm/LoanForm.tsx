"use client";
import React from "react";
import Input from "../formInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./LoanForm.module.css";

// validation schema
const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("نام  را وارد کنید")
    .min(2, "نام باید حداقل شامل 2 کاراکتر باشد"),
  lastName: Yup.string()
    .required("نام خانوادگی  را وارد کنید")
    .min(4, "نام خانوادگی باید حداقل شامل 4 کاراکتر باشد"),
  phoneNumber: Yup.string()
    .required("شماره موبایل را وارد کنید")
    .matches(/^[0-9]{11}$/, "شماره موبایل باید 11 رقم باشد")
    .nullable(),
});

// initial values
const initialValues = {
  firstName: "",
  lastName: "",
  nationalCode: "",
  dateOfBirth: "",
  phoneNumber: "",
};
const LoanForm = () => {
  const onSubmit = (values) => {
    const { email, password } = values;
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ثبت تسهیلات بانکی</h1>
      <form onSubmit={formik.handleSubmit} className={styles.main}>
        <Input name="firstName" formik={formik} label="نام" />
        <Input name="lastName" formik={formik} label="نام خانوادگی" />
        <Input name="nationalCode" formik={formik} label="کد ملی" />
        <Input name="dateOfBirth" formik={formik} label="تاریخ تولد" />
        <Input name="phoneNumber" formik={formik} label="شماره تماس" />

        <button type="submit" className={`btn--primary ${styles.btn}`}>
          ثبت
        </button>
      </form>
    </div>
  );
};

export default LoanForm;
