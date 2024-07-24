import Slider from "@/components/loanTypesSlider/Slider";
import styles from "./page.module.css";
import LoanList from "@/components/loanList/LoanList";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Slider />
      </div>
      {/* <LoanList /> */}
    </main>
  );
}
