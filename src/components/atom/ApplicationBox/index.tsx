import Link from "next/link";
import { IProps } from "./interface";
import styles from "./ApplicationBox.module.css";

export const ApplicationBox = ({ application }: IProps) => {
  return (
    <Link href={`/applications/${application.id}`}>
      <div className={styles.outer}>
        <h5 className={styles.title}>{application.name}</h5>
      </div>
    </Link>
  );
};
