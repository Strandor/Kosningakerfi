import { IProps } from "./interface";
import styles from "./DropDownItem.module.css";
import DownArrow from "../../../../public/images/downarrow.svg";

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
