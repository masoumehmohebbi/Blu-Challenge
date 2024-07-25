import { FormValues } from "@/types/common";
import { FormikProps } from "formik";
import React from "react";

type SelectProps = {
  selectOptions: {
    label: string;
    value: string;
  }[];
  name: keyof FormValues;
  formik: FormikProps<FormValues>;
};

const Select = ({ formik, name, selectOptions }: SelectProps) => {
  return (
    <div>
      <select
        {...formik.getFieldProps(name)}
        className="w-full cursor-pointer transition bg-slate-100 duration-300 rounded-lg p-3 border focus:outline-none focus:bg-white focus:border-blue-300 hover:border-blue-300 focus:shadow-lg focus:shadow-blue-100"
      >
        {selectOptions.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
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
