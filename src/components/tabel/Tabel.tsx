import { ChildrenProp } from "@/types/common";
import styles from "./tabel.module.css";

const Table = ({ children }: ChildrenProp) => {
  return <table className={styles.tabel}>{children}</table>;
};

export default Table;

function TableHeader({ children }: ChildrenProp) {
  return (
    <thead>
      <tr className="title-row">{children}</tr>
    </thead>
  );
}

function TableBody({ children }: ChildrenProp) {
  return <tbody>{children}</tbody>;
}

function TableRow({ children }: ChildrenProp) {
  return <tr>{children}</tr>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
