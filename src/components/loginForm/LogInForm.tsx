"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./LogInForm.module.css";
import Input from "@/components/formInput/page";
import { FormValues, LogInFormProps } from "@/types/formInputs";

// validation schema
const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("نام  را وارد کنید")
    .min(2, "نام باید حداقل شامل 2 کاراکتر باشد"),
  lastName: Yup.string()
    .required("نام خانوادگی  را وارد کنید")
    .min(4, "نام خانوادگی باید حداقل شامل 4 کاراکتر باشد"),
  nationalCode: Yup.string()
    .length(10, "کد ملی باید 10 رقم باشد")
    .required("کد ملی الزامی است"),
  birthDate: Yup.date().required("تاریخ تولد الزامی است"),
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
  birthDate: "",
  phoneNumber: "",
};

const LogInForm = ({ nextStep, updateFormData }: LogInFormProps) => {
  const onSubmit = (values: FormValues) => {
    updateFormData(values);
    nextStep();
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
        <Input
          name="birthDate"
          type="date"
          formik={formik}
          label="تاریخ تولد"
        />
        <Input name="phoneNumber" formik={formik} label="شماره تماس" />

        <button
          type="submit"
          disabled={!formik.isValid}
          className={`btn--primary ${styles.btn}`}
        >
          بعدی
        </button>
      </form>
    </div>
  );
};

export default LogInForm;
