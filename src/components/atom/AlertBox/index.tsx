import { IProps } from "./interface";
import styles from "./AlertBox.module.css";

export const AlertBox = ({ title, message }: IProps) => {
  return (
    <div className={styles.outer}>
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
};
