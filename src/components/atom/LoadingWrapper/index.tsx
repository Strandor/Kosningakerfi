import { IProps } from "./interface";
import styles from "./LoadingWrapper.module.css";
import ReactLoading from "react-loading";

export const LoadingWrapper = ({ children, isLoading }: IProps) => {
  if (!isLoading) return children;

  return (
    <div className={styles.outer}>
      <ReactLoading color="black" type="bubbles" className={styles.image} />
    </div>
  );
};
