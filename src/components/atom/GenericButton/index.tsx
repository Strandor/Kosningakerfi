import { IProps } from "./interface";
import styles from "./GenericButton.module.css";

export const GenericButton = ({ children, onPress }: IProps) => {
  return (
    <button className={styles.button} onTouchEnd={onPress}>
      {children}
    </button>
  );
};
