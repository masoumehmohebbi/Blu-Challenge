import { FormikProps } from "formik";

export interface InputProps {
  placeholder?: string;
  formik: FormikProps<any>;
  name: string;
  label: string;
  type?: string;
}

export interface SelectProps {
  formik: any;
  name: string;
  selectOptions: { name: string }[];
  label: string;
}
