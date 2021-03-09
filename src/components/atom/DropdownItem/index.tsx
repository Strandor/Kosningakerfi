import { IProps } from "./interface";
import styles from "./DropdownItem.module.css";

export const DropdownItem = ({ text, children }: IProps) => {
  return (
    <div className={styles.outer}>
      <div className={styles.header}>
        <p className={styles.title}>{text}</p>
      </div>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};
