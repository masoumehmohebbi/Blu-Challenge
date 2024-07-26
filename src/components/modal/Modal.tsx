import { XCircleIcon } from "@heroicons/react/24/outline";
import styles from "./modal.module.css";
import Table from "../tabel/Tabel";
import toLocalDate from "@/utils/toLocalDate";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "@/common/Loading";
// types
interface UserFormData {
  firstName: string;
  lastName: string;
  nationalCode: string;
  phoneNumber: string;
  birthDate: string; // Adjust if you have a different format
}

interface UserLoan {
  formData: UserFormData;
  values: {
    loanType: string;
  };
}
interface ModalProps {
  onOpen: (open: boolean) => void;
  open: boolean;
}

function Modal({ onOpen, open }: ModalProps) {
  // ! get user information from Json-server DB
  const [userLoanLists, setUserLoanLists] = useState<UserLoan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!open) return;

    const fetchUserLoanLists = async () => {
      try {
        setLoading(false);
        const { data } = await axios.get("http://localhost:5000/user");
        setUserLoanLists(data);
      } catch (err) {
        toast.error(err as string);
      }
    };

    fetchUserLoanLists();
  }, [open]);

  // ! Second Way get user information from localStorage
  // let userLocalStorageLoanLists = null;
  // if (typeof window !== "undefined") {
  //   userLocalStorageLoanLists = JSON.parse(localStorage.getItem("user"));
  // }

  if (!open) return null;
  return (
    <div>
      <div className={styles.backdrop} onClick={() => onOpen(false)}></div>
      <div className={styles.modal}>
        <div className={styles.modal__header}>
          <h2 title="loanLists" className={styles.title}>
            لیست تسهیلات
          </h2>
          <button onClick={() => onOpen(false)}>
            <XCircleIcon className={`${styles.close} ${styles.icon}`} />
          </button>
        </div>
        {loading ? (
          <Loading />
        ) : !userLoanLists?.length ? (
          <div className={styles.text}>هنوز هیج تسهیلاتی ثبت نکردید.</div>
        ) : (
          <UserLoanListsComponent data={userLoanLists} />
        )}
      </div>
    </div>
  );
}

export default Modal;
interface UserLoanListsComponentProps {
  data: UserLoan[];
}
const UserLoanListsComponent = ({ data }: UserLoanListsComponentProps) => {
  console.log(data);

  return (
    <div className={styles.tabelContainer}>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>نام متقاضی</th>
          <th>نام خانوادگی </th>
          <th>نوع وام</th>
          <th>کد ملی</th>
          <th>شماره تماس</th>
          <th>تاریخ تولد</th>
        </Table.Header>
        <Table.Body>
          {data?.map((item, index) => (
            <Table.Row key={index}>
              <td>{index + 1}</td>
              <td>{item.formData.firstName}</td>
              <td>{item.formData.lastName}</td>
              <td>{item.values.loanType}</td>
              <td>{item.formData.nationalCode}</td>
              <td>{item.formData.phoneNumber}</td>
              <td>{toLocalDate(item.formData.birthDate)}</td>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};
