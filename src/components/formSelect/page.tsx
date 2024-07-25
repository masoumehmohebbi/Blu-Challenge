import { FormValues } from "@/types/common";
import { FormikProps } from "formik";
import React from "react";
import styles from "./formSelect.module.css";

type SelectProps = {
  selectOptions: {
    label: string;
    value: string;
  }[];
  name: keyof FormValues;
  formik: FormikProps<FormValues>;
};

const Select = ({ formik, name, selectOptions, label }: SelectProps) => {
  return (
    <div>
      <label htmlFor="name">{label}</label>
      <select {...formik.getFieldProps(name)} className={styles.select}>
        <option key="choose" value="">
          انتخاب کنید...
        </option>
        {selectOptions?.map((item) => (
          <option key={item.name} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      {formik.errors[name] && formik.touched[name] && (
        <span className="text-sm text-red-500">{formik.errors[name]}</span>
      )}
    </div>
  );
};

export default Select;
