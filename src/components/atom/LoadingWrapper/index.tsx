import { IProps } from "./interface";
import styles from "./LoadingWrapper.module.css";

export const LoadingWrapper = ({ children, isLoading }: IProps) => {
  if (!isLoading) return children;

  return (
    <div className={styles.outer}>
      <img />
    </div>
  );
};
