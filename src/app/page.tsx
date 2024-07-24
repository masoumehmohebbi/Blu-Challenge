import LoanForm from "@/components/loanForm/LoanForm";
import styles from "./page.module.css";
import LoanList from "@/components/loanList/LoanList";

export default function Home() {
  return (
    <main className={styles.main}>
      <LoanForm />
      <LoanList />
    </main>
  );
}
