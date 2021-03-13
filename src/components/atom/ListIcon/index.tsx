import { IProps } from "./interface";
import styles from "./ListIcon.module.css";

export const ListIcon = ({ title, icon, onIconPress }: IProps) => {
  return (
    <div className={styles.outer}>
      <p className={styles.title}>{title}</p>
      <img className={styles.icon} src={icon} onClick={onIconPress} />
    </div>
  );
};
