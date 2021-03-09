import { IProps } from "./interface";
import styles from "./GenericButton.module.css";
import ReactLoading from "react-loading";

export const GenericButton = ({ children, onPress, loading }: IProps) => {
  return (
    <button
      className={styles.button}
      onTouchEnd={!loading ? onPress : undefined}
    >
      {loading ? <ReactLoading color="gray" type="bubbles" /> : children}
    </button>
  );
};
