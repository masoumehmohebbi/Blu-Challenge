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
export interface SelectOption {
  name: string;
  value: string;
}
export interface FormValues {
  firstName?: string;
  lastName?: string;
  nationalCode?: string;
  birthDate?: string;
  phoneNumber?: string;
  loanType?: string;
  accountNumber?: string;
  iban?: string;
  annualBalance?: string;
  loanRepayment?: string;
}
export interface LoanTypesFormValues {
  loanType: string;
  loanRepayment: string;
}

export interface LogInFormProps {
  nextStep: () => void;
  updateFormData: (values: FormValues) => void;
}
