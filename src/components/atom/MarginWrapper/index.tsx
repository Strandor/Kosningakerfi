import { IProps } from "./interface";
import styles from "./MarginWrapper.module.css";

export const MarginWrapper = ({ children }: IProps) => {
  return <div className={styles.outer}>{children}</div>;
};
