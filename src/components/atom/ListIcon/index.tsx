import { IProps } from "./interface";
import styles from "./ListIcon.module.css";

export const ListIcon = ({ title, icon, onIconPress }: IProps) => {
    return (
        <div className={styles.outer}>
            <div className={styles.arrow_container}>
                <img src="/images/arrow-right.svg" />
            </div>
            <p className={styles.title}>{title}</p>
            {icon && (
                <img className={styles.icon} src={icon} onClick={onIconPress} />
            )}
        </div>
    );
};
