import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "../formInput/page";
import styles from "./BankDataForm.module.css";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

// validation schema
const validationSchema = yup.object({
  accountNumber: yup.string().required("شماره حساب الزامی است"),
  iban: yup.string().required("شماره شبا الزامی است"),
  annualBalance: yup
    .number()
    .required("میانگین ریالی موجودی سالیانه الزامی است"),
});

// initial values
const initialValues = {
  accountNumber: "",
  iban: "",
  annualBalance: "",
};

const BankDataForm = ({ nextStep, prevStep, updateFormData }) => {
  const onSubmit = (values) => {
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
      <div className="flexCol">
        <button className="btn--secondary" onClick={prevStep}>
          <ArrowRightIcon className={styles.icon} />
          <span>برگشت</span>
        </button>
        <h1 className={styles.title}>ثبت اطلاعات بانکی</h1>
      </div>
      <form className={styles.main} onSubmit={formik.handleSubmit}>
        <Input name="accountNumber" formik={formik} label="شماره حساب" />
        <Input name="iban" formik={formik} label="شماره شبا" />

        <Input
          type="number"
          name="annualBalance"
          formik={formik}
          label="میانگین ریالی موجودی سالیانه"
        />

        <button
          disabled={!formik.isValid}
          className={`btn--primary ${styles.btn}`}
          type="submit"
        >
          بعدی
        </button>
      </form>
    </div>
  );
};

export default BankDataForm;
