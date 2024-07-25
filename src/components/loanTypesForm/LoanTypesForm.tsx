// use client
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./LoanTypesForm.module.css";
import {
  ArrowRightIcon,
  CurrencyDollarIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import Select from "../formSelect/page";
import loans from "../../../server/data.json";
import toast from "react-hot-toast";

// validation schema
const validationSchema = Yup.object({
  loanType: Yup.string().required("نوع تسهیلات الزامیست"),
  loanRepayment: Yup.string().required("مدت زمان پرداخت الزامیست"),
});

// initial values
const initialValues = {
  loanType: "",
  loanRepayment: "",
};

const LoanTypesForm = ({ prevStep, formData, updateFormData }) => {
  const selectOptions = loans.data;
  const [selectedRepayment, setSelectedRepayment] = useState([]);

  const onSubmit = (values) => {
    updateFormData(values);

    // Persist data in LocalStorage
    let existingData = localStorage.getItem("user");
    let dataArray = existingData ? JSON.parse(existingData) : [];
    dataArray.push(formData);
    localStorage.setItem("user", JSON.stringify(dataArray));

    window.location.href = "/";
    toast.success("تسهیلات با موفقیت ثبت شد");
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  const onChange = (e) => {
    if (e.target.name === "loanType") {
      const seletedLoan = selectOptions.find(
        (loan) => loan.name === e.target.value
      );

      setSelectedRepayment(
        seletedLoan?.repaymentType.map((r) => {
          return { name: r.name, value: r.value };
        })
      );
      return;
    }
  };
  const calcHandler = () => {
    const selectedLoan = selectOptions.find(
      (loan) => loan.name === formik.values.loanType
    );
    if (!selectedLoan) return;
  };

  return (
    <div className={styles.container}>
      <div className="flexCol">
        <button className="btn--secondary" onClick={prevStep}>
          <ArrowRightIcon className={styles.iconMoveBack} />
          <span>برگشت</span>
        </button>
        <h1 className={styles.title}>انتخاب تسهیلات</h1>
      </div>
      <form
        className={styles.main}
        onSubmit={formik.handleSubmit}
        onChange={(e) => {
          formik.handleChange(e);
          onChange(e);
        }}
      >
        <Select
          label="نوع تسهیلات"
          name="loanType"
          formik={formik}
          selectOptions={selectOptions}
        />
        <Select
          label="زمان پرداخت"
          name="loanRepayment"
          formik={formik}
          selectOptions={selectedRepayment}
        />

        <div>
          <button onClick={calcHandler} className={styles.calcBtn}>
            محاسبه کن
          </button>

          <div className="flexRow">
            <div className={styles.iconWrapper}>
              <ExclamationTriangleIcon
                style={{ color: "rgb(var(--color-red-500))" }}
                className={styles.icon}
              />
              <h4>جریمه دیرکرد: </h4>
            </div>
            <span>0</span>
          </div>
          <div className="flexRow">
            <div className={styles.iconWrapper}>
              <CurrencyDollarIcon
                style={{ color: "rgb(var(--color-success))" }}
                className={styles.icon}
              />
              <h4>قسط تسهیلات: </h4>
            </div>
            <span>0</span>
          </div>
        </div>
        <button
          disabled={!formik.isValid}
          className={`btn--primary ${styles.btn}`}
          type="submit"
        >
          ثبت
        </button>
      </form>
    </div>
  );
};

export default LoanTypesForm;
