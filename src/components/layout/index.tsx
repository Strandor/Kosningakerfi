import { IProps } from "./interface";
import styles from "./layout.module.css";

export const Layout = ({ children }: IProps) => {
  return <div className={styles.outer}>{children}</div>;
};
