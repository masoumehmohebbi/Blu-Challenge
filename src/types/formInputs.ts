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
export interface FormValues {
  loanType: string;
  loanRepayment: string;
}

export interface SelectOption {
  name: string;
  value: string;
}
export interface LoanTypesFormProps {
  prevStep: () => void;
  formData: FormValues;
  updateFormData: (values: FormValues) => void;
}
