import { InputProps } from "src/types/formInputs";
import styles from "./formInput.module.css";

export default function Input({
  placeholder,
  formik,
  name,
  label,
  type = "text",
}: InputProps) {
  return (
    <div className={styles.main}>
      <div>
        <label htmlFor="name">{label}</label>

        {formik.touched[name] && formik.errors[name] ? (
          <div className={styles.error}>
            {typeof formik.errors[name] === "string" && formik.errors[name]}
          </div>
        ) : null}
      </div>
      <input
        dir="ltr"
        placeholder={placeholder}
        className={styles.input}
        type={type}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
      />
    </div>
  );
}
