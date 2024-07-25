import { XCircleIcon } from "@heroicons/react/24/outline";
import styles from "./modal.module.css";
import toLocalDate from "utils/toLocalDate";

function Modal({ onOpen, open }) {
  const userLoanLists = JSON.parse(localStorage.getItem("user"));

  if (userLoanLists) {
    console.log(userLoanLists);
  }
  if (!open) return null;
  return (
    <div>
      <div className={styles.backdrop} onClick={() => onOpen(false)}></div>
      <div className={styles.modal}>
        <div className={styles.modal__header}>
          <h2 className={styles.title}>لیست تسهیلات</h2>
          <button onClick={() => onOpen(false)}>
            <XCircleIcon className={`${styles.close} ${styles.icon}`} />
          </button>
        </div>
        {!userLoanLists && (
          <div className={styles.text}>هنوز هیج تسهیلاتی ثبت نکردید.</div>
        )}
        {userLoanLists && <UserLoanLists data={userLoanLists} />}
      </div>
    </div>
  );
}

export default Modal;

const UserLoanLists = ({ data }) => {
  const {
    firstName,
    lastName,
    birthDate,
    loanType,
    phoneNumber,
    nationalCode,
    loanRepayment,
    annualBalance,
  } = data;
  return (
    <div>
      <div>نوع وام: {loanType}</div>
      <div>{toLocalDate(birthDate)}</div>
    </div>
  );
};
