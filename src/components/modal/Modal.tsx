import { XCircleIcon } from "@heroicons/react/24/outline";
import styles from "./modal.module.css";
import Table from "../tabel/Tabel";
import toLocalDate from "@/utils/toLocalDate";

function Modal({ onOpen, open }) {
  let userLoanLists = null;
  if (typeof window !== "undefined") {
    userLoanLists = JSON.parse(localStorage.getItem("user"));
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
        {!userLoanLists ? (
          <div className={styles.text}>هنوز هیج تسهیلاتی ثبت نکردید.</div>
        ) : (
          <UserLoanListsComponent data={userLoanLists} />
        )}
        {/* {userLoanLists && <p>yes</p>} */}
      </div>
    </div>
  );
}

export default Modal;

const UserLoanListsComponent = ({ data }) => {
  return (
    <div className={styles.tabelContainer}>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>نام متقاضی</th>
          <th>نام خانوادگی متقاضی</th>
          <th>نوع وام</th>
          <th>کد ملی</th>
          <th>شماره تماس</th>
          <th>تاریخ تولد</th>
        </Table.Header>
        <Table.Body>
          {data?.map((item, index) => (
            <Table.Row key={index}>
              <td>{index + 1}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.loanType}</td>
              <td>{item.nationalCode}</td>
              <td>{item.phoneNumber}</td>
              <td>{toLocalDate(item.birthDate)}</td>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};
