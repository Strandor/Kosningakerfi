import { IProps } from "./interface";
import styles from "./TitleHeader.module.css";

export const TitleHeader = ({ children }: IProps) => {
  return <h4 className={styles.title}>{children.toUpperCase()}</h4>;
};
